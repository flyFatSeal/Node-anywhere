module.exports = {
	root: process.cwd(),
	hostname: '127.0.0.1',
	port: 9845,
	compress: /\.(html|js|css|vue|md|json|jpg)/,
	cache: {
		maxAge: 600,
		expires: true,
		cacheControl: true,
		lastModified: true,
		etag: true
	}
}