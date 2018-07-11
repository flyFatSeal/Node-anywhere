const http = require('http')
const config = require('./config/defaultConfig')
const chalk = require('chalk')
const router = require('./help/router')
const path = require('path')


// const promisify = require('util').promisify

const server = http.createServer((req, res) => {
	const filePath = path.join(config.root, req.url)
	router(res, req, filePath)
})

server.listen(config.port, config.hostname, () => {
	const addr = `http://${config.hostname}:${config.port}`
	console.info(`server started at ${chalk.green(addr)}`)
})