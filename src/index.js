module.exports = function toReadable (number) {
    let Numbers = ["zero", "one", "two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
    let numbersInWords = "";
    let i;

    if(number <= 20){
        numbersInWords = Numbers[number];
    }else{
        let arrayOfNumbers = ('' + number).split('');
        i = arrayOfNumbers.length;
            if(i > 3){
                numbersInWords = "error";
            };
            if(i == 3 ){
                numbersInWords = Numbers[arrayOfNumbers[0]] + " hundred";   //запись сотой
                i = 2;
            };
            if(i == 2 ){
              if(arrayOfNumbers[arrayOfNumbers.length - i] == 8){
                numbersInWords += " eighty";
                i = 1;
              }else if(arrayOfNumbers[arrayOfNumbers.length - i] == 5){
                numbersInWords += " fifty";
                i = 1;
              }else if(arrayOfNumbers[arrayOfNumbers.length - i] == 4){
                numbersInWords += " forty";
                i = 1;
              }else if(arrayOfNumbers[arrayOfNumbers.length - i] == 3){
                numbersInWords += " thirty";
                i = 1;
              }else if(arrayOfNumbers[arrayOfNumbers.length - i] == 2){
                numbersInWords += " twenty";
                i = 1;
              } else if(arrayOfNumbers[arrayOfNumbers.length - i] == 1){
                numbersInWords += " " + Numbers[arrayOfNumbers[1] + arrayOfNumbers[2]];
                i = 0; 
              }else if(arrayOfNumbers[arrayOfNumbers.length - i] == 0){
                numbersInWords = numbersInWords;
                i = 1;
              }else {
                numbersInWords += " " + Numbers[arrayOfNumbers[arrayOfNumbers.length - i]] + "ty";
                i = 1;
              }
            }
            if(i == 1 ){ 
              if(arrayOfNumbers[arrayOfNumbers.length - i] == 0){
                numbersInWords = numbersInWords;
              }else{
                numbersInWords += " " + Numbers[arrayOfNumbers[arrayOfNumbers.length - i]];
              } 
                i = 0;
            }
         }
  if(numbersInWords[0] == " "){
    numbersInWords = numbersInWords.slice(1);
  }
        return numbersInWords;
}
