const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/src/styleguide.html'));
});

/*
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});
*/

app.use(express.static(__dirname + '/src'));
//Store all HTML files in src folder.

//add the router
app.use('/', router);
app.listen(process.env.port || 7777);

console.log('Running at Port 7777');