const chalk = require('chalk');

module.exports = () => {
    const sayHello = chalk`{bgBlack.bold.yellow Hello Christopher !} {bgRed.underline.blueBright Hello Maxime !} {bgWhite.black Hello Valentin !} {bgYellow.blue Hello Wilders ! }`
    console.log(sayHello)
}