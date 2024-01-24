const name = "     Avinash"
const surname = "roy"
const age = 27

//old type concatination
console.log(name + surname + age);

//mordern type concatination
console.log(`My name is ${name} ${surname}. and my age is ${age}.`);

//There are two type of String declaration are possible in javaScript.
// 1. is this below:
const namen = "Avinash"
const newString = name.trim()
console.log(newString);

//2. is this below:
const anotherString = new String('Avinash')// in this case we will declear value under the String object.
console.log(anotherString.toUpperCase());

// There are several types of function given by the String() object. Which is we learn below:

//1. at():
/*-----The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 
code unit located at the specified offset. This method allows for positive and negative integers. 
Negative integers count back from the last string character.*/
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"


console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"


//2. charAt():
//------------The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
console.log(sentence.charAt(6));
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 5 is u"


//3. chatCodeAt():
//---------------- The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Character code 117 is equal to u


//4. codePointAt():
// -----------------The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character 
// starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"

//5. concat():
// -------------The concat() method of String values concatenates the string arguments to this string and returns a new string.
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"


//6. endsWith():
// -------------The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or 
// false as appropriate.
const str12 = 'Cats are the best!';

console.log(str12.endsWith('best!'));
// Expected output: true

console.log(str12.endsWith('best', 17));
// Expected output: true

const str22 = 'Is this a question?';

console.log(str22.endsWith('question'));
// Expected output: false


//7. fromCharCode():
// ------------------The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="


//8. fromCodePoint():
// -------------------The String.fromCodePoint() static method returns a string created from the specified sequence of code points.
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"


//9. includes():
// ---------------The includes() method of String values performs a case-sensitive search to determine whether a 
// given string may be found within this string, returning true or false as appropriate.

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"



//10. indexOf():
// ----------------The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. 
// It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to 
// the specified number.
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"


//11. isWellFormed():
// --------------------- The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.
const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }
  // Logs:
  // false
  // false
  // false
  // false
  // true
  // true
  


  //12. lastIndexOf():
//   --------------------The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified 
//   substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to 
//   the specified number.
const paragraph1 = "I think Ruth's dog is cuter than your dog!";

const searchTerm1 = 'dog';

console.log(
  `Index of the last ${searchTerm1} is ${paragraph1.lastIndexOf(searchTerm1)}`,
);
// Expected output: "Index of the last "dog" is 38"



//13. localeCompare():
// ----------------------The localeCompare() method of String values returns a number indicating whether this string comes before, or after, 
// or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0



//14. match():
// --------------The match() method of String values retrieves the result of matching this string against a regular expression.
const paragraph3 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph3.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]



//15. matchAll():
// ----------------The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, 
// including capturing groups.
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]



//16. normalize():
// ------------------The normalize() method of String values returns the Unicode Normalization Form of this string.
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true



//17. padEnd():
// --------------The padEnd() method of String values pads this string with a given string (repeated, if needed) 
// so that the resulting string reaches a given length. The padding is applied from the end of this string.
const str14 = 'Breaded Mushrooms';

console.log(str14.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str24 = '200';

console.log(str24.padEnd(5));
// Expected output: "200  "



//18. padStart():
// ----------------The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string 
// reaches the given length. The padding is applied from the start of this string.
const str15 = '5';

console.log(str15.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"



//19. 