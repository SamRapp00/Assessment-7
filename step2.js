//1
function addToZero(nums) {
    const numSet = new Set();

    for (let num of nums) {
        if (numSet.has(-num)) {
            return true;
        } else {
            numSet.add(num);
        }
    }
    return false;
}


console.log(addToZero([]));             // -> False
console.log(addToZero([1]));            // -> False
console.log(addToZero([1, 2, 3]));      // -> False
console.log(addToZero([1, 2, 3, -2]));  // -> True

//Runtime = O(n)

//2

function hasUniqueChars(word) {
    const charSet = new Set();

    for (let char of word) {
        if (charSet.has(char)) {
            return false;
        } else {
            charSet.add(char);
        }
    }
    return true;
}

const word1 = "Monday";
const word2 = "Moonday";

if (hasUniqueChars(word1)) {
    console.log("Unique Characters True");
} else {
    console.log("Unique Characters False");
}

if (hasUniqueChars(word2)) {
    console.log("Unique Characters True");
} else {
    console.log("Unique Characters False");
}
 

//Runtime = O(n)

//3

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const charSet = new Set(alphabet);
    sentence = sentence.toLowerCase();

    for (let char of sentence) {
        if (charSet.has(char)) {
            charSet.delete(char);
        }
    }
    return charSet.size === 0;
}


const sentence1 = "The quick brown fox jumps over the lazy dog!";
const sentence2 = "I like cats, but not mice";

if (isPangram(sentence1)) {
    console.log("Pangram True");
} else {
    console.log("Pangram False");
}

if (isPangram(sentence2)) {
    console.log("Pangram True");
} else {
    console.log("Pangram False");
}


//Runtime = O(1)

//4
function findLongestWord(words) {
    let longestLength = 0;
    
    for (let word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }
    
    return longestLength;
}

console.log(findLongestWord(["hi", "hello"]));  

//Runtime = O(1)