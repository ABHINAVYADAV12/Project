const d=new Date()
const d1=new Date("Fri, 14 Jul, 2028")
const date=d1-d;
const days=Math.floor(date/(1000*60*60*24));
console.log(days)
const hours=Math.floor((date/(1000*60*60))%24);
console.log(hours)
const minutes=Math.floor((date/(1000*60))%60);
console.log(minutes)
const seconds=Math.floor((date/(1000)%60));
console.log(seconds)
console.log(`days ${days} hours ${hours} minutes ${minutes} seconds ${seconds} till olympics 2028`)