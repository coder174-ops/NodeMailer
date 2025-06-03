// const nodemailer=require('nodemailer');

// const transporter=nodemailer.createTransport({
//    secure: true,
//    host: 'smtp.gmail.com', 
//    port: 465, 
//     auth: {
//         user: 'neerajuiet2023@gmail.com',
//         pass: 'zxnnlvdoppwbfuxc'
//     }
// });

// function sendMail(to,sub,msg){
//   transporter.sendMail({
//     to: to,
//     subject: sub,
//     html: msg
// });
// console.log("Email Sent Successfully");
// }
// sendMail("neerajuiet2023@gmail.com","This is subject 2","I am fine")

const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport(
  {
    secure:true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
      user:'niteshgo14356@gmail.com',
      pass:'kybgbfpairbpykgf'
    }
  }
)

function sendMail(to ,sub, msg){
  transporter.sendMail({
    to:to,
    subject : sub,
    html:msg
  });
console.log('email sent')
}
sendMail("niteshgo14356@gmail.com" ,"this is subject" ,"I am fine");