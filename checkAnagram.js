/*For two strings, return true if they are anagrams of each other and false if they are not
e.g. checkAnagrams(string1: parent, string2 : entrap) returns true
checkAnagrams(string1: astronomer, string2 : moon starer) returns true
checkAnagrams(string1: something, string2 : another thing) returns false */

function isAnagram(string1, string2) {

    var s1=string1.replace(" ", ""),
        s2=string2.replace(" ", "")

    if (s1.length !== s2.length)
        return false;

    var a = s1.split('').sort()
        , b = s2.split('').sort();

    return a.toString() === b.toString();
};

console.log(isAnagram('parent','entrap')) //true
console.log(isAnagram('astronomer','moon starer')) //true
console.log(isAnagram('something','another thing')) //false