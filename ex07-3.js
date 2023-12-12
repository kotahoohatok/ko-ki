function bmi5(){ var x,y
    x = document.getElementById('bmi1').value;
    y = document.getElementById('bmi2').value;
    alert(Number(x) / Number(y) * Number(y));}


function keisan(){ //keisan　という関数を実行する
  var a, b,BMI;
  a = document.getElementById("shincho").value;
  b	= document.getElementById("taijuu").value; 
  BMI = b/( (a/100)*(a/100) ); //BMIの計算結果をcに代入
　alert('あなたのボディマス指数（BMI）は' + BMI + 'です' );}
