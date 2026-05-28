// 操作したいHTMLの部品
const omikujiBox = document.getElementById('omikuji');
const pullButton = document.getElementById('pullButton');
//ボタンがクリックされたときの処理
function omikujiDraw() {
  const resultList = ["大吉", "中吉", "小吉", "凶", "大凶"];
  const randomNumber = Math.floor(Math.random() * 5);
  const result = resultList[randomNumber];

  omikujiBox.innerText = result;

  // ボタンの文字を「もう一度引く」に変更
  pullButton.innerText = 'もう一度おみくじを引く';
if (result === "大吉") {
    omikujiBox.style.color = "red";             
    omikujiBox.style.backgroundColor = "pink";  
  
  }
  else if (result === "中吉") {
    omikujiBox.style.color = "orange";          
    omikujiBox.style.backgroundColor = "lightyellow"; 
  } 
  else if (result === "小吉") {
    omikujiBox.style.color = "green";         
    omikujiBox.style.backgroundColor = "honeydew"; 
  } 
  else if (result === "凶") {
    omikujiBox.style.color = "blue";           
    omikujiBox.style.backgroundColor = "lightcyan"; 
  } 
  else if (result === "大凶") {
    omikujiBox.style.color = "white";          
    omikujiBox.style.backgroundColor = "black"; 
  }
}
// ボタンが「click」されたら、上の「omikujiDraw」を実行する
pullButton.addEventListener('click', omikujiDraw);

  