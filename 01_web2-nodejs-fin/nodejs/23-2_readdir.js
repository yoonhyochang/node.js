//* 2. readdir.js 파일 생성 후 파일 목록을 읽어오는 코드 작성
var testFolder = '../data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
});


