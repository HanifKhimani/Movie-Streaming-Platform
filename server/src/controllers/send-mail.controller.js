import nodemailer from "nodemailer";

const sendEmail = async (email, subject, url) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      secureConnection: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USEREMAILID + process.env.DOMAIN,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USEREMAILID + process.env.DOMAIN,
      to: email,
      subject: subject,
      text: `Hellow folk! \n  for Activate your Account click here :- ${url}`,
    });
  } catch (error) {
    console.log("🚀 ~ sendEmail ~ error:", error);
    throw error;
  }
};

export default sendEmail;
