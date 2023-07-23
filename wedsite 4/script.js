
"use strict";


     let resetting = "";
     let value = "";
     const output = document.getElementById("display");
     let result = 0;

     let previousOperand;
     let currentOperand;
     let activieOperation;

     let firstclick = true;
     
     function one(){
        if (firstclick == true){
           output.value = 1
           firstclick = false
        }
        else{
            output.value += 1
        }
     }

      function two(){
        if (firstclick == true){
            output.value = 2
            firstclick = false
        }
        else{
            output.value += 2
        }
      }
      
      function three(){
        if (firstclick == true){
            output.value = 3
            firstclick = false
        }
        else{
            output.value += 3
        }
      }

      function four(){
        if (firstclick == true){
            output.value = 4
            firstclick = false
        }
        else{
            output.value += 4
        }
      }

      function five(){
        if (firstclick == true){
            output.value = 5
            firstclick = false
        }
        else{
            output.value += 5
        }
      }

      function six(){
        if (firstclick == true){
            output.value = 6
            firstclick = false
        }
        else{
            output.value += 6
        }
      }

      function seven(){
        if (firstclick == true){
            output.value = 7
            firstclick = false
        }
        else{
            output.value += 7
        }
      }

      function eight(){
        if (firstclick == true){
            output.value = 8
            firstclick = false
        }
        else{
            output.value += 8
        }
      }

      function nine(){
        if (firstclick == true){
            output.value = 9
            firstclick = false
        }
        else{
            output.value += 9
        }
      }

      function zero(){
        if (firstclick == true){
            output.value = 0
            firstclick = false
       }
        else{
            output.value += 0
        }
      }
    function reseter(){
        output.value = "";
    }
    

     document.getElementById("btn-one").addEventListener("click", function() {one();});
     document.getElementById("btn-two").addEventListener("click", function() {two();});
     document.getElementById("btn-three").addEventListener("click", function() {three();});
     document.getElementById("btn-four").addEventListener("click", function() {four();});
     document.getElementById("btn-five").addEventListener("click", function() {five();});
     document.getElementById("btn-six").addEventListener("click", function() {six();});
     document.getElementById("btn-seven").addEventListener("click", function() {seven();});
     document.getElementById("btn-eight").addEventListener("click", function() {eight();});
     document.getElementById("btn-nine").addEventListener("click", function() {nine();});
     document.getElementById("btn-zero").addEventListener("click", function() {zero();});
     document.getElementById("c").addEventListener("click", function() {reseter();});
     
     function compute (operation){
        previousOperand = output.value;
        output.value = "";
        activieOperation= operation;
     }

     function showResult (){
        currentOperand = output.value;
        switch (activieOperation){
            case "+":
                result = Number(previousOperand) + Number(currentOperand);
            break;
            case "-":
                result = Number(previousOperand) - Number(currentOperand); 
            break;
            case "*": 
                result = Number(previousOperand) * Number(currentOperand);
            break;
            case "/":  
                result = Number(previousOperand) / Number(currentOperand);  
            break;
            //case "%":  
               // result = Number(previousOperand) % Number(currentOperand);  
            //break;
        }
        output.value = result;
     }
    

     document.getElementById("subtract").addEventListener("click", function() {compute("-");});
     document.getElementById("add").addEventListener("click", function() {compute("+");});
     document.getElementById("multiply").addEventListener("click", function() {compute("*");});
     document.getElementById("divide").addEventListener("click", function() {compute("/");});
     //document.getElementById("perc").addEventListener("click", function() {compute("%");});
     document.getElementById("equate").addEventListener("click", showResult);







        let count = "0";
        document.getElementById("countvalue").innerHTML = count;

        function increament(){
           count++;
           document.getElementById("countvalue").innerHTML = count;
        }

        function decreament(){
           count--;
           document.getElementById("countvalue").innerHTML = count;
       }
       function reset(){
           count = 0; 
           document.getElementById("countvalue").innerHTML = count;  
       }





// let num = [1,2,3,4,5,6,7,8,9,10];
// let sum = [];
// for(let i= 0; i< num.length; i++) { 
//     sum = sum + i;
//     console.log(sum) 
    
// } 

// let input = document.querySelector('.high');
// let button = document.querySelector('btn');
// button.addEventListener('click', () =>{ 



// } )