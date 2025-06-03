const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
   secure: true,
   host: 'smtp.gmail.com', // Replace with your SMTP server
   port: 465, // Port for secure SMTP
    auth: {
        user: 'neerajuiet2023@gmail.com',
        pass: 'zxnnlvdoppwbfuxc'
    }
});

function sendMail(to,sub,msg){
  transporter.sendMail({
    to: to,
    subject: sub,
    html: msg
});
console.log("Email Sent Successfully");
}
sendMail("neerajuiet2023@gmail.com","This is subject","this is the the test mail")