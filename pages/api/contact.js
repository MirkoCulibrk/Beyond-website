// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
export default async (req, res) => {
  const {subject,name,email,message}=req.body;
  const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
      user:'beyondsrbijawebsite@gmail.com',
      pass:'oxbwdprpjsfpftob'
    }
  });
  try{
    const emailRes=await transporter.sendMail({
      // who is sending
      from:email,
      to:'beyondteethserbia@gmail.com',
      subject:`${subject}`,
      html:`<p>Dobili ste novi mail.</p>
      <p><strong>Ime:</strong>${name}</p>
      <p><strong>Email:</strong>${email}</p>
      <p><strong>Poruka:</strong>${message}</p>
      `
    });
  }catch(err){
  }
  res.status(200).json(req.body)
}
