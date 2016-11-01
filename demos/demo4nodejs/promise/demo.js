var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/637';

var req = http.get(url, function(res) {
  var html = '';
  res.on('data',function (data) {
  	html+=data;
  });
  res.on('end',function (){
  	var courseDatas = filterChapters(html);
  	printCourseInfo(courseDatas);
  })
}).on('error', function(e) {
  console.log("错误：" + e.message);
});


function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var courseDatas = [];
	chapters.each(function (index,ele) {
		var chapter = $(this);
		var chapterTitle = chapter.find("strong").text().trim();
		var courseData = {
			chapterTitle : chapterTitle,
			videos : []
		}
		var videos = chapter.find(".video li");
		videos.each(function (index,ele){
			var video = $(this);
			var videoTitle = video.find("a").text().trim();
			var videoId = video.find("a").attr("href").split("/video/")[1];
			courseData.videos.push({
				videoTitle : videoTitle,
				videoId : videoId
			});
		});

		courseDatas.push(courseData);
	})

	return courseDatas;
	
}

function printCourseInfo(courseDatas){
	courseDatas.forEach( function (chapter, index, array) {
		console.log( chapter.chapterTitle + "\n" );
		chapter.videos.forEach(function(video, index, array){
			console.log( video.videoId + "," + video.videoTitle + "\n" );
		});
	});
}