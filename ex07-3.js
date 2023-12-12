function keisan(){ //keisan　という関数を実行する
  var a, b,BMI;
  a = document.getElementById("shi").value;
  b	= document.getElementById("tai").value; 
  BMI = b/( a*a ); 
　alert('あなたのボディマス指数（BMI）は' + BMI + 'です' );}
