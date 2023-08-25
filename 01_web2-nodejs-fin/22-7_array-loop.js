//* 배열에 있는 값을 모두 더하는 반복문
var number = [1, 400, 12, 34];
var i = 0;
var total = 0;
while(i < number.length) {
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`);
