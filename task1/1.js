function BinToInt(number) {
   var i;
   var res = 0;
   var l = number.length;
   for (i=0; i<l; i++)
        {
            if (number[i] != '1' && number[i] != '0')
                return undefined
            if (number[i] == '1')
                res += 2**(l-i-1)
        }
   return res;
}

var a = BinToInt("1010");

console.log(a);