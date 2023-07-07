const fs = require('fs');

const csvFilePath = 'data/students.csv';
const separator = ';'; // Remplacez par le séparateur réel utilisé dans votre fichier CSV

let allNotes = [];

fs.readFile(csvFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const csvFile = data.split('\n');
    const headers = csvFile[0].split(separator);
    const csvData = [];

    for (let i = 1; i < csvFile.length; i++) {
        const line = csvFile[i];
        const rowData = line.split(separator);
        const obj = {};

        for (let j = 0; j < headers.length; j++) {
            let note = getRandomNumber()
            rowData[3] = note
            allNotes.push(note)
            obj[headers[j]] = rowData[j];
        }

        csvData.push(obj);
    }

    convertToCSV(csvData, 'data/students.csv')
});

function getRandomNumber(min= 0, max= 20) {
    return Math.ceil(Math.random() * (max - min) + min);
}
function convertToCSV(data, filePath) {
    const headers = Object.keys(data[0]);
    const csvRows = [];

    csvRows.push(headers.join(';'));

    data.forEach(obj => {
        const values = headers.map(header => {
            const value = obj[header];
            return typeof value === 'string' ? `"${value}"` : value;
        });

        csvRows.push(values.join(';'));
    });

    let lastRow = ['average', mean(allNotes)]
    csvRows.push(lastRow.join(';'));

    const csvContent = csvRows.join('\n');

    fs.writeFile(filePath, csvContent, 'utf8', (err) => {
        if (err) {
            console.error(err);
        }
    });
}


function mean(arr) {
    let sum = 0;

    arr.forEach(function (item) {
        sum += item;
    });

    return sum / arr.length;
}

module.exports.getRandomNumber = getRandomNumber
module.exports.mean = mean