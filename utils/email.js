const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;



// mail sender
const sendEmail = async ({email, verCode, sub, msg}) => {

	// 1. create a transporter
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD
		}
	});
	transporter.use('compile', htmlToText());

	// 2. define the email options
	const mailOptions = {
		from: process.env.EMAIL_USERNAME,
	    to: email,
	    subject: sub,
	    html: msg
	}
	
	// 3. send the email
	await transporter.sendMail(mailOptions);
}	



module.exports = sendEmail;