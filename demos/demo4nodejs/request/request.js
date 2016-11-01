var http = require("http");
var options = {
	'hostname' : 'www.music.163.com',
	'method' : 'post',
	'path' : '/weapi/resource/comments/add?csrf_token=32ea09edf34ed90c6214275af56442ef',
	'headers' : {
		'Accept' : '*/*',
		'Accept-Encoding' : 'gzip, deflate',
		'Accept-Language' : 'zh-CN,zh;q=0.8,en;q=0.6',
		'Connection' : 'keep-alive',
		'Content-Length' : '508',
		'Content-Type' : 'application/x-www-form-urlencoded',
		'Cookie' : 'usertrack=ezq0X1dt5AMaQCzzB630Ag==; _ntes_nuid=bb20a49bfd44102ff785ed0ea4bee684; __gads=ID=56d6bb1c5be63e81:T=1470360265:S=ALNI_MYeHrhEDKNkUYvLJyjKAX2_oNxwfw; vjuids=-9a3a903e0.156584d6321.0.103ffd9f1c8; vjlast=1470360282.1470360282.30; _ntes_nnid=5ba5879e99321f9bd9dd2dcfcf69118c,1470360281906; vinfo_n_f_l_n3=b073e5ba2cbabb24.1.0.1470360281924.0.1470360287388; Province=020; City=020; _ga=GA1.2.195225555.1472019388; NTES_SESS=OeE56eA4Jk27094WsBCFZtkxSZIQi_qGvZz0TjPBmFCnnO47rnp41.8dzKu7DBypCyyrwUQ3XhV8zFLHQuoh8PSKmBAzIwpCqrsk14Dh9kF8YpTfweyi38lsk6Wf1w35HdeZQv7lFHtq4sKIw.hKhltsn; S_INFO=1472527385|0|3&20##|doublesdh; P_INFO=doublesdh@163.com|1472527385|0|urs|00&99|gud&1472019379&urs#gud&440100#10#0#0|&0||doublesdh@163.com; __utma=187553192.195225555.1472019388.1472019388.1472527417.2; __utmb=187553192.2.10.1472527417; __utmc=187553192; __utmz=187553192.1472527417.2.2.utmcsr=reg.163.com|utmccn=(referral)|utmcmd=referral|utmcct=/Main.jsp; cm_newmsg=user%3Ddoublesdh%40163.com%26new%3D7%26total%3D19; JSESSIONID-WYYY=a1f0ecdf7500503f073007eda97cdb0881c21239dc349822bb78e6bfb1e97d2909fad4de9ed93b3e0704c4c2da58f912bb14cb39670076b10f4177e4f5c7cbbfaffaec30c744d426ff77c6337e76f087f4744439cbd77ca59e6b38e510f9c8d3b68f488bdb557d887798c0e076a2b2675aa29d805c9a1dca1bb62178e65fb2eb53f66202%3A1472529321122; _iuqxldmzr_=25; __remember_me=true; MUSIC_U=dead871850d3362cabd151d7cd766f3933091e464b1282d10f128f8d2e27fe0ef4f9bb34795a6e200b0fddca5fd3458d7955a739ab43dce1; __csrf=32ea09edf34ed90c6214275af56442ef; NETEASE_WDA_UID=18057766#|#1401169055186; __utma=94650624.1237520983.1469606316.1470704640.1472527522.20; __utmb=94650624.5.10.1472527522; __utmc=94650624; __utmz=94650624.1472527522.20.12.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
		'Host' : 'music.163.com',
		'Origin' : 'http://music.163.com',
		'Referer' : 'http://music.163.com/song?id=30394766',
		'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
	}
};
var req = http.request(options,function(res){

});
req.on("error",function(e){
	console.log(e);
});
req.write('params=ECiRpzAC2%2BDAI9lqLiK6e%2Fb2G%2FyWqA4resY3YcWEBW66DUWMvF7qXe30uddfJbN73BN04%2Fc6BcOF6l7K7%2B4Y8BLuEH%2FWCj6r5kR2DzLYjYbu2gu%2B0DQQCLInYlnVqUw462Hn180S0NRybZUHY3gezetdXkumNI3yqAktGNQOpK8R1UiO6XCle8ekGYth8h1z73J8JYzJ9jSmxxpBNMticQ%3D%3D&encSecKey=e034a30695da5be0e10942bee8cf45805399f8c86594bea430fb75cf1c95d8d6bad2fdccff71dea8527da87d2bcb7bf9882b7193dda55361ecd68a4971555f63f08ff9823bc8b7432f0681d661736bc2387b473a96d5b55f72d4cbe3dd97d4d692cffc66e089d32db4859d925b7d32873f85aa6da65fa07145456f088682eb62');
req.end();
