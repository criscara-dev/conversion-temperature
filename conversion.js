///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Fahranheit to Celsius ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('button').addEventListener("click", function() {
 
 //input F value
 var f = document.getElementById('input1').value;
 
 // exe conversion
 function C(f) {
   return 5/9*(f - 32);
  } 
 //console.log(C(572));
 
// print result
 document.getElementById('result').textContent = (C(f)).toFixed(2);
 document.getElementById('calculation').textContent = C;
  
});




///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Celsius to Fahranheit ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////




document.getElementById('button2').addEventListener("click", function() {
 
 //input F value
 var celsius = document.getElementById('input2').value;
 
 // exe conversion
 function F(celsius) {
   return 9/5*celsius + 32;
  } 
 
// print result
 document.getElementById('result').textContent = Math.round(F(celsius));
 document.getElementById('calculation').textContent = F;
  
});


document.getElementById('button3').addEventListener("click", function() {
 document.getElementById('input1').value = '';
 document.getElementById('input2').value = '';
 document.getElementById('result').textContent = '';
});
