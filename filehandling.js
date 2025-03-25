const fs = require('fs');

try {
    fs.writeFileSync('./files/hello.txt', 'hello from nodejs');
    fs.writeFileSync('./files/hello.txt', 'india');
    fs.appendFileSync('./files/hello.txt', 'hello from india');
    const data = fs.readFileSync('./files/hello.txt', 'utf-8');
    console.log(data);
    fs.cpSync('./files/hello.txt', './files/hello2.txt');

    // Create /hello if it doesn't exist
    if (!fs.existsSync('./files/hello')) {
        fs.mkdirSync('./files/hello');
    }

    // Create /hello2 inside /hello if it doesn't exist
    if (!fs.existsSync('./files/hello/hello2')) {
        fs.mkdirSync('./files/hello/hello2');
    }

} catch (error) {
    console.error('An error occurred:', error);
}