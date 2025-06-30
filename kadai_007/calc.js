let num = 15;

//変数numが3と5の倍数の場合
if (num % 3 == 0 && num % 5 == 0) {
  console.log('３と５の倍数です');
}

//変数numが3の倍数の場合
else if (num % 3 == 0) {
  console.log('３の倍数です');
}

//変数numが5の倍数の場合
else if (num % 5 == 0) {
  console.log('５の倍数です');
}

else {
  console.log(num);
}