var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* Get contact page */

router.get('/', function(req, res, next){
    res.render('contact', {title: 'Contact'});
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        
         service: 'Gmail',
         auth: {
            user: 'testtt@gmail.com',
            pass: 'checkkk'
         }
    });

  var mailOptions = {
      from: 'John Doe <johnDoe@outlook.com>',
      to: 'test@gmail.com',
      subject: 'website submission',
      text: 'You have a new message. Name: ' +req.body.name+ 'Email: ' +req.body.email+ 'Message: ' +req.body.message,
      html: '<p>You have a new message </p> <ul><li> Name: ' +req.body.name+ '</li><li> Email: ' +req.body.email+ '</li><li> Message: ' +req.body.message+ '</li></ul>'

  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
         console.log(error);
         res.redirect('/');
      }else{
          console.log('Message sent ' +info.response);
          res.redirect('/');
      }
  });

});

module.exports = router;