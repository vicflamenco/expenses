const homeRouter = require('./homeRouter');
const productsRouter = require('./productsRouter');

module.exports = function(app) {
    app.use('/', homeRouter);
    app.use('/products', productsRouter);
}


