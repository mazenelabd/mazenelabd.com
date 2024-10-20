import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendEmail = async (req, res) => {
    const { 
        email, firstName, lastName, phone, message
    } = req.body;

    console.log('process.env.EMAIL_USER', process.env.EMAIL_USER);
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'New email from mazenelabd.com',
        text: `
            Email From: ${firstName}-${lastName}\n
            Phone: ${phone}\n
            Email: ${email}\n
            Message:\n${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Oops! Something went wrong.' });
    }
};

export default sendEmail;