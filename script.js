const menus = [
    "カレー",
    "オムライス",
    "ハンバーグ",
    "パスタ",
    "親子丼"
];

const pushButtom = document.getElementById("pushButtom");
pushButtom.addEventListener("click", function() {
  console.log("ボタンが押された");
});
Math.random();
console.log(Math.random());
Math.floor(Math.random() * menus.length)
