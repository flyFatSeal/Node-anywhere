const path = require('path')

const mimeType = {
	'css': 'text/css',
	'gif': 'image/gif',
	'html': 'text/html',
	'js': 'text/javascript',
	'txt': 'text/plain',
	'jpeg': 'image/jpeg',
	'jpg': 'image/jpeg',
	'png': 'application/x-png'
}

module.exports = (filePath) => {
	let ext = path.extname(filePath)
		.split('.')
		.pop()
		.toLowerCase()
	if(!ext) {
		ext = filePath
	}
	return mimeType[ext] || mimeType['txt']
}