const app = require('./app');
const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log(`data-manipulation app listening on port ${port}`)
})
// From https://github.com/render-examples/express-hello-world/blob/main/app.js
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;