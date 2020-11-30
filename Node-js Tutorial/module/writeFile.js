const fs = require('fs')

const testObj = {
    name: 'Medul Hasan',
    email: 'medul@gmail.com',
    address: {
        city: 'pabna',
        country: 'BD'
    }
}

const data = JSON.stringify(testObj)

fs.writeFile('./test.json', data, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('File write successfully');
    }
})