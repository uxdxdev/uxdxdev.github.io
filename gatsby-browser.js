require('./src/styles/prism-material-dark.css')
require('./src/styles/global.css')

exports.onServiceWorkerUpdateReady = () => window.location.reload(true);
