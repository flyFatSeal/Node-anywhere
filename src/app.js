const http = require('http')
const conf = require('./config/defaultConfig')
const chalk = require('chalk')
const router = require('./help/router')
const path = require('path')
const openUrl = require('./help/openUrl')


// const promisify = require('util').promisify
class Server {
	constructor (config) {
		this.conf = Object.assign({}, conf, config)
	}
	start() {
		const server = http.createServer((req, res) => {
			const filePath = path.join(this.conf.root, req.url)
			router(res, req, filePath, this.conf)
		})
		
		server.listen(this.conf.port, this.conf.hostname, () => {
			const addr = `http://${this.conf.hostname}:${this.conf.port}`
			console.info(`server started at ${chalk.green(addr)}`)
			openUrl(addr)
		})
	}
}

module.exports = Server