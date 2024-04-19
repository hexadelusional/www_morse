const morseDictionary = {
    "a": "._",
    "à": "._",
    "ä": "._",
    "â": "._",
    "b": "_...",
    "c": "_._.",
    "d": "_..",
    "e": ".",
    "é": ".",
    "è": ".",
    "ë": ".",
    "ê": ".",
    "f": ".._.",
    "g": "__.",
    "h": "....",
    "i": "..",
    "ï": "..",
    "î": "..",
    "j": ".___",
    "k": "_._",
    "l": "._..",
    "m": "__",
    "n": "_.",
    "o": "___",
    "ö": "___",
    "ô": "___",
    "p": ".__.",
    "q": "__._",
    "r": "._.",
    "s": "...",
    "t": "_",
    "u": ".._",
    "ü": ".._",
    "û": ".._",
    "v": "..._",
    "w": ".__",
    "x": "_.._",
    "y": "_.__",
    "z": "__..",
    "1": ".____",
    "2": "..___",
    "3": "...__",
    "4": "...._",
    "5": ".....",
    "6": "_....",
    "7": "__...",
    "8": "___..",
    "9": "____.",
    "0": "_____"
};
function translation1(toTranslate) {
    let translated = "";
    for (let i = 0; i < toTranslate.length; i++) {
        let found = false; // Flag to check if a match is found
        const letter = toTranslate[i].toLowerCase();
        if (letter in morseDictionary) {
            translated += morseDictionary[letter] + " ";
            found = true;
        } else if (letter === " " || letter === "'" || letter === "," || letter === ";" || letter === ":" || letter === "!" || letter === "?" || letter === "." || letter === "/") {
            translated += " "; // Preserve spaces
            found = true;
        } else {
          return "Whoops... that wasn't latin letters you entered.";
        }

    }
    return translated;
}


function translation2(toTranslate) {
    let translated = "";
    const morseWords = toTranslate.split(" ");
    for (let i = 0; i < morseWords.length; i++) {
        let found = false; // Flag to check if a match is found
        for (const letter in morseDictionary) {
            if (morseDictionary[letter] === morseWords[i]) {
                translated += letter;
                found = true;
                break; // Exit the loop once a match is found
            }
        }
        if (!found) { // If no match is found for the current Morse code word
            return "Whoops... that wasn't morse code you entered.";
        }
    }
    return translated;
}

let answer1;
let answer2;

document.getElementById("b1").onclick = function(){
  answer1 = translation1(document.getElementById("morsify").value); // the fuction 1 exectutes when button 1 is pressed
  document.getElementById("answer1").textContent = answer1; // the value of fuction 1 is displayed
}

document.getElementById("b2").onclick = function(){
  answer2 = translation2(document.getElementById("demorsify").value);
  document.getElementById("answer2").textContent = answer2;
}
