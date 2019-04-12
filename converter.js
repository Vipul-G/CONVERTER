var questient = 62952841928; //input any decimal number here

const log = console.log;
const decimal = questient;
const divisor = 2;

var remainder = "";

while (questient >= divisor) {
    if (questient%2 == 0){
        remainder += "0&";
    }else if(questient%2 == 1) {
        remainder += "1&";
    }
    questient = Math.floor(questient/divisor);
}
var binary = (remainder + questient).split("&");

while(binary.length%4 != 0){
    binary[binary.length] = '0';
}
binary = binary.reverse();

const hexaStorage = {
    '0000': "0",
    '0001': "1",
    '0010': "2",
    '0011': "3",
    '0100': "4",
    '0101': "5",
    '0110': "6",
    '0111': "7",
    '1000': "8",
    '1001': "9",
    '1010': "A",
    '1011': "B",
    '1100': "C",
    '1101': "D",
    '1110': "E",
    '1111': "f"
}
var len = binary.length;
var i=binary.length, x= i - 4, countHexaArr=0;
var hexaArr = [];

do {
    hexaArr[countHexaArr] = binary.slice(x, i).join("");
    x = x - 4;
    i = i - 4;
    countHexaArr++;
}while(x >= 0);
hexaArr.reverse();
var hexaDecimal = "";
for(var l=0; l<hexaArr.length; l++){
    hexaDecimal += hexaStorage[hexaArr[l]];
}

log("hexaDecimal of " + decimal + " is " + hexaDecimal);