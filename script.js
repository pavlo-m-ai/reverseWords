const fs = require('fs');
const path = require('path');

function reverseWords(text) {
    return text.split(/(\s+)/) 
               .map(word => word.split('').reverse().join('')) 
               .join('');
}

function processFile(inputFile, outputFile) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Помилка читання файлу:', err);
            return;
        }
        
        const reversedText = reverseWords(data);
        
        fs.writeFile(outputFile, reversedText, 'utf8', err => {
            if (err) {
                console.error('Помилка запису файлу:', err);
                return;
            }
            console.log(`Файл успішно збережено як ${outputFile}`);
        });
    });
}


const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

processFile(inputFilePath, outputFilePath);
