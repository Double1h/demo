var https = require("https");
var url = "https://www.baidu.com/";

https.get(url, function(res) {
  var html = '';
  res.on('data',function(data){
  	html += data;
  })

  res.on('end',function(data){
  	console.log(html);
  })
}).on('error', function(e) {
  console.log("错误：" + e.message);
});