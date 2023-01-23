// lab 02 benjamin sarras 101324243

const fs = require('fs');
const csv = require('csv-parser');
console.log("Week 1 Lab Exercise 1");


console.log("Removing canada.txt");
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log('canada.txt was deleted');
}

console.log("Removing usa.txt");
if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log('usa.txt deleted');
}

fs.appendFileSync('canada.txt', `country,year,population`);
fs.appendFileSync('usa.txt', `country,year,population`);



fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => {
        console.log(data);
        
        if (data.country == "Canada") {
            fs.appendFileSync('canada.txt', `${data.country},${data.year},${data.population}\n`);
        }
        
        if (data.country == "United States") {
            fs.appendFileSync('usa.txt', `${data.country},${data.year},${data.population}\n`);
        }

    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
