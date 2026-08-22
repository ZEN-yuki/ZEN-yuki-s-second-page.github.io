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
    const randomNumber = Math.floor(Math.random() * 10);
    console.log("ボタンが押された");   
});

console.log(randomNumber)
const selectmenu = menus[randomNumber];
resulttext.textContent =selectmenu;
