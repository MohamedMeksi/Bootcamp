function Anagram(str1, str2) {

    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(Anagram("Astronomer", "Moon starer")); 
console.log(Anagram("School master", "The classroom")); 
console.log(Anagram("The Morse Code", "Here come dots"));
