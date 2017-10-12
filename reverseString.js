/*
 * Given a string, write a method to reverse the order of characters in each word preserving the whitespaces and order of the words.
 * e.g. input = "This is a Test String"
 * output = "sihT si a tseT gnirtS"
*/


function reverseString(string){
    var words = string.split(' ');
    var result = [];
    for(var i = 0; i < words.length; i ++){
        result.push(words[i].split('').reverse().join(''));
    }
    return result.join(' ');
}

console.log(reverseString('This is a Test String')) //sihT si a tseT gnirtS