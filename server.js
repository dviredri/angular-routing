var express = require('express');

var app = express();

// console.log(app)
app.use(express.static('public'));
app.use(express.static('node_modules'));


// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });



// main error handler
// warning - not for use in production code!
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.send({
//     message: err.message,
//     error: err
//   });
// });
app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(8000, function () {
  console.log("local host register, on 8000!!")
});