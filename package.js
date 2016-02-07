Npm.depends({
	'lru-cache': '4.0.0',
});

Package.describe({
	name: 'simply:lru',
	version: '4.0.0',
	summary: 'A cache object that deletes the least-recently-used items.',
	git: '',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.use(['cosmos:browserify@0.9.3'], 'client');
	api.addFiles('client.browserify.js', 'client');

	api.addFiles('server.js', 'server');

	api.export('LRU');
});
