/*Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify (cc) {
    if (cc.length < 4)
      return cc;
    cc = cc.replace(/\d(?=.{4,}$)/g, '#');

    return cc;
  }
  
 
  const tests = ["4556364607935616", "4556-3646-0793-5616", 
                  "64607935616"];
  
  tests.forEach((number) => console.log(`Testing: ${number} - Output: ${maskify(number)}`));