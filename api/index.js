const express = require("express");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");

const app = express();

const validateContactForm = (data) => {

    let validated = true;
    //messages will be array

    let messages = [];

    // every item is an object 
    // item has message, and field
    // i'll receive these values
    // studentname // required and max 20 characters, 
    // studentlastname // required and max 30 characters, 
    // parent fullname //required and max 45 characters,
    // phone // require and number 20 charcaters
    // level // required primaria or secundaria, academia
    // degree // 10 characters, 
    // and message // 200 characters

    const { sname, slastname, pname, phone, level, degree, message } = data;

    if (!sname || sname.length > 20) {
        validated = false;
        messages.push({
            field: "sname",
            message: "Ingrese correctamente el nombre del estudiante"
        })
    }

    if (!slastname || slastname.length > 30) {
        validated = false;
        messages.push({
            field: "slastname",
            message: "Ingrese correctamente los apellidos del estudiante"
        })
    }

    if (!pname || pname.length > 45) {
        validated = false;
        messages.push({
            field: "pname",
            message: "Ingrese correctamente el nombre completo del apoderado"
        })
    }

    if (!phone || phone.length > 20) {
        validated = false;
        messages.push({
            field: "phone",
            message: "Ingrese correctamente tu número de cel."
        })
    }

    if (!level || level.length > 15) {
        validated = false;
        messages.push({
            field: "level",
            message: "Ingrese correctamente el nivel."
        })
    }

    if (!degree || degree.length > 10) {
        validated = false;
        messages.push({
            field: "degree",
            message: "Ingrese correctamente el grado."
        })
    }

    if (message.length > 200) {
        validated = false;
        messages.push({
            field: "message",
            message: "Su mensaje no debe contener mas de 200 caracteres."
        })
    }

    return {
        validated,
        messages
    }
}


const nodeMailPlease = (data, callback) => {

    const mailer = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        auth: {
            user: process.env.CLIENT_MESSAGES_SENDER_MAIL,
            pass: process.env.CLIENT_MESSAGES_SENDER_PASSWORD
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    const myMessage = `
        <div>
         <h3>Nueva pre-inscripción<h3/>
         <p>
         A continuación se muestra la información enviada por el cliente. 
         <i>Tenga en consideracion que el mensaje podria contener datos mal ingresados.<i/>
         <p/>
         <hr/>
         <p>Nombre del estudiante:  ${data.sname}<p/>
         <p>Apellidos del Estudiante:  ${data.slastname}<p/>
         <p>Nombre completo del Apoderado: ${data.pname}<p/>
         <p>Número de celular o tel:  ${data.phone}<p/>
         <p>Nivel:  ${data.level}<p/>
         <p>Grado:  ${data.degree}<p/>
         <p>Codigo de descuento generado:  ${data.cupon}<p/>
         <p>Mensaje adicional:  ${data.message}<p/>
        </div>
    `

    let mailOptions = {
        from: "Pre-Inscripcion <carrioneduca@outlook.com>",
        to: process.env.CLIENT_MESSAGES_RECEIVER_MAIL,
        subject: "¡IMPORTANTE!. Nueva pre-inscripción del cliente desde <carrioneduca.edu.pe>",
        html: myMessage
    };

    mailer.sendMail(mailOptions, callback);
}


const getCuponCode = (sname, slastname) => {
    const now = new Date();
    const code1 = `${now.getHours()}${now.getMinutes()}`;
    return sname && slastname ? `${sname.substr(0, 1)}${slastname.substr(0, 1)}${code1}`.toUpperCase() : 'EKSE75'
}

const sendMail = (req, res) => {

    try {
        const data = req.body.data;

        const { validated, messages } = validateContactForm(data);

        if (validated) {
            const cupon = getCuponCode(data.sname, data.slastname);
            data.cupon = cupon;
            nodeMailPlease(data, (err, success) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ message: "Ocurrió un error, inténtalo más tarde" });
                }
                return res.status(200).send({ message: cupon });
            })
        } else {
            return res.status(422).send({ messages });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Ocurrió un error, inténtalo más tarde" });
    }

}

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.status(200).send({ message: "hey. Elias :) katerina love you" });
});

app.post("/mail", sendMail);

module.exports = app;