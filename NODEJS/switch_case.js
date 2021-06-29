var num = 2;
var ordinal;

switch(num){
    case 1:
        ordinal = "first";
        break;
    case 2:
        ordinal = "second";
        break;
    case 3:
        ordinal = "third";
        break;
    default:
        ordinal = "number out of range";
        break;
}

console.log(ordinal);