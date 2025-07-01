const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1, // 月は0始まりなので1を加える
  date.getDate(),
  date.getFullYear(),
];

console.log(`${year}年${month}月${day}日`);