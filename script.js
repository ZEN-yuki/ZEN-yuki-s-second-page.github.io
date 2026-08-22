const menus = [
    "カレー",
    "オムライス",
    "ハンバーグ",
    "パスタ",
    "親子丼"
];

const pushButtom = document.getElementById("pushButtom");
const resulttext = document.getElementById("resulttext");
pushButtom.addEventListener("click", function() {
  console.log("ボタンが押された");
    const randomNumber = Math.floor(Math.random() * Math.length);
});

console.log(randomNumber)
const selectmenu = menus[randomNumber];
resulttext.textContent =selectmenu;
