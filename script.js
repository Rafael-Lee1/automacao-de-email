// script.js

const nodemailer = require('nodemailer');

// Configurações de envio de e-mail (usando Gmail neste exemplo)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'seu_email@gmail.com', // Insira seu endereço de e-mail Gmail
        pass: 'sua_senha' // Insira sua senha do Gmail
    }
});

// Dados do e-mail a ser enviado
const mailOptions = {
    from: 'seu_email@gmail.com', // Seu endereço de e-mail
    to: 'destinatario@example.com', // Endereço de e-mail do destinatário
    subject: 'Assunto do E-mail',
    text: 'Corpo do E-mail'
};

// Função para enviar o e-mail
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Erro ao enviar o e-mail:', error);
    } else {
        console.log('E-mail enviado com sucesso:', info.response);
    }
});
