module.exports = function(express){
    const router = express.Router()

    require('./product/routing')(router);
    // require('./modules/admin/admin_router')(router);
    return router
}
