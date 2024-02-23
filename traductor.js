function translateText(inputText) {
    
    let output;

    // SEPARAR EN PALABRAS
    let words = inputText.split(" ");
    for (var i = 0; i < words.length; i++) {
        let isCapitalized;
        if (words[i][0] === words[i][0].toUpperCase()) {
            isCapitalized = true;
        } else {
            isCapitalized = false;
        };

        let endsInS;
        if (getLastLetter(words[i]) == 's') {
            endsInS = true;
        } else {
            endsInS = false;
        };

        console.log(endsInS)
        // SEPARAR EN SÍLABAS
        let syllabes = getSyllabes(words[i])
        for (var o = 0; o < syllabes.length; o++) {
            let hasMoreThanOneVowel;
            if (/[aeiou]{2}/i.test(syllabes[o])) {
                hasMoreThanOneVowel = true;
            } else {
                hasMoreThanOneVowel = false;
            };
            // eliminar la "i" si la sílaba tiene más de una vocal
            if (!hasMoreThanOneVowel) {
                syllabes[o] = syllabes[o].replace(/i/g, "");
            };
        };
        words[i] = syllabes.join("");
        
        // reemplazar consonantes a ñ, excepto la m
        const charsToReplace = /[bcdfghjklnpqrstvwxyz]/g;
        words[i] = words[i].replace(charsToReplace, 'ñ');

        // eliminar ñ consecutivas
        words[i] = words[i].replace(/ñ+/g, 'ñ');

        // si terminaba en s, quitar la última ñ reemplazada y ponerla de nuevo
        if (endsInS) {
            const lastIndex = words[i].lastIndexOf('ñ');

            if (lastIndex !== -1) {
                words[i] = words[i].slice(0, lastIndex) + "s" + words[i].slice(lastIndex + 1);
            };
        }

        if (isCapitalized) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        };
    };

    output = words.join(" ");
    return output;
}

function getLastLetter(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      const char = string[i];
      // no contempla la ñ. de puta madre
      if (/[a-zA-Z]/.test(char)) {
        return char;
      }
    }
    return "";
  }

function isCapitalized(word) {
    return word[0] === word[0].toUpperCase();
}

function getSyllabes(word) {
    output = [];
    var s = silabaJS.getSilabas(word);
    s.silabas.forEach(function(item) {
        output.push(item.silaba);
    });
    return output;
}