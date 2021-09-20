const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')
module.exports = async name => {
    clear()
    const data = await figlet('qyd')
    log(data)
    log(`Creating project ${name}`);
    await clone('https://github.com/su37josephxia/vue-template.git', name)
    log("🚛 Installing dependencies...");
}