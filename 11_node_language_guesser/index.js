import { franc, francAll } from 'franc';
import langs from 'langs';
import 'colors';

// get text input
const inputText = process.argv[2];


// get language code from franc
const inputLngResult = francAll(inputText);
const inputLngCode = inputLngResult[0][0];
const inputLngProb = inputLngResult[0][1] * 100;


// und = undetermined
if (inputLngCode === "und") {
    console.log(`Sorry, I could not detect a language for input "${inputText}".`.red);
}
else {
    try {
        // get language from langs
        const inputLng = langs.where("3", inputLngCode).name;
        if (inputLngProb < 0.5) {
            console.log(`This was ${inputLng} (I'm ${inputLngProb}% sure)!`.orange);
        }
        else {
            console.log(`This was ${inputLng} (I'm ${inputLngProb}% sure)!`.green);
        }
    }
    catch {
        console.log(`I detected the language code "${inputLngCode}" but could not match a language to it.`.red);

    }


}