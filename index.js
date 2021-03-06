const express=require('express')
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer')

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/mailServ',(req,res)=>{
nodemailer.createTestAccount((err,account)=>{
	const htmlEmail=`
	<h3>Contact Details</h3>
	<ul>
	<li>Name : ${req.body.name}</li>
	<li>Email : ${req.body.email}</li>
	
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>

	`

	let transporter = nodemailer.createTransport({
	name:'EvenTU',
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'joshua.green@ethereal.email',
        pass: 'fZ87sEuD92Zh5PxgFW'
    }
	}
	);

	let mailOptions={
		from:'joshua.green@ethereal.email',
		to:'anish.mendiratta@gmail.com',
		replyTo:'joshua.green@ethereal.email',
		subject:'Thanks for registering',
		text:req.body.message,
		html:htmlEmail
	}
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err)
		{
			return console.log(err)
		}
		console.log('Message Sent: %s',info)
		console.log('Message URL: %s',nodemailer.getTestMessageUrl(info))
	})
})
})

const PORT=process.env.PORT||3001

app.listen(PORT,()=>console.log(`Server listening on Port ${PORT}`))