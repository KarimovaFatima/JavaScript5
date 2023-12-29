let a = prompt ("Please enter the first side of the triangle ");
let b = prompt ("Please enter the second side of the triangle");
let c = prompt ("Please enter the third side of the triangle");

// switch (triangle){
//     case function checkTypeTriangle1 (triangle, b, c){
//         if(triangle==b && b==c && c==triangle ){
//          console.log(checkTypeTriangle1(triangle,b,c))
//          }       
//     }:
//      break;
// }
     
    // case function checkTypeTriangle2 (a, b, c) {
    //     if(a==b && b==a){
    //          return "Triangle is isosceles"
    //      }
    //     }:
    //     break;
    // case function checkTypeTriangle3 (a, b, c) {
    //     if(a!=b && c!=a && c!=b){
    //          return "Triangle is scalene "
    //      }
    //     }:
    //     break;


// function checkTypeTriangle1 (a, b, c) {
// if(a==b && b==c && c==a ){
//      return "Triangle is equilateral"
//  }
// }
// console.log(checkTypeTriangle1(a,b,c));

function checkTypeTriangle2 (a, b, c) {
    if(a==b && b!=c && a!=c){
         return "Triangle is isosceles"
     }
     if(a==b && b==c && c==a){
        return "Triangle is equilateral"
     }
     if(a!=b && a!=c && b!=c)
     return "Triangle is scalene"    
    }   
console.log(checkTypeTriangle2(a,b,c));

// function checkTypeTriangle3 (a, b, c) {
//     if(a!=b && c!=a && c!=b){
//          return "Triangle is scalene "
//      }
//     }  
// console.log(checkTypeTriangle3(a,b,c));