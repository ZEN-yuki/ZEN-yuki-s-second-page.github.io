const menus = [
    "カレー",
"オムライス",
"ハンバーグ",
"パスタ",
"親子丼",
"チャーハン",
"牛丼",
"タコライス",
"ナポリタン",
"カルボナーラ",
"焼きそば",
"うどん",
"ラーメン",
"冷やし中華",
"生姜焼き",
"唐揚げ",
"とんかつ",
"餃子",
"麻婆豆腐",
"焼き魚",
"鮭のムニエル",
"肉じゃが",
"鯖の味噌煮",
"豚汁定食"
];

const pushButtom = document.getElementById("pushButtom");
const resulttext = document.getElementById("resulttext");
pushButtom.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * menus.length);
    console.log("ボタンが押された");  
    const selectmenu = menus[randomNumber];
resulttext.textContent =selectmenu;

});
console.log(randomNumber)
