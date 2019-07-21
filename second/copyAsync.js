// fs internal package of node is imported.
const fs = require('fs');

console.log('Copying src.mp4 to target.mp4 ...');
fs.copyFile('src.mp4','target.mp4',()=>{
    console.log('Successfully copied.');
});
console.log('Application completed.');