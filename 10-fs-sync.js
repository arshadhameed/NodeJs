const {readFileSync,writeFileSync}=require('fs')
console.log(start)
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result.txt',`here is the result : ${first,second}`,
{flag:'a'});
