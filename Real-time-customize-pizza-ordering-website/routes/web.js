const home_cont=require('../app/http/controllers/home_cont')
const menu_cont=require('../app/http/controllers/menu_cont')
const cart_cont=require('../app/http/controllers/customers/cart_cont')
const auth_cont=require('../app/http/controllers/auth_cont')
const guest = require('../app/http/middleware/guest')
const order_cont=require('../app/http/controllers/customers/order_cont')
const check_cont=require('../app/http/controllers/check_cont')

function initRoutes(app){


    app.get('/', home_cont().index)

    app.get('/menu', menu_cont().menu)
    app.get('/cart', cart_cont().index)
    app.post('/update-cart', cart_cont().update)

    app.get('/login',guest,auth_cont().login)
    app.post('/login', auth_cont().postLogin)

    app.get('/register',guest, auth_cont().register)
    app.post('/register', auth_cont().postRegister)

    app.get('/logout',guest, auth_cont().logout)

    app.get('/checkout',check_cont().index)



    //customer routes
    app.post('/orders', order_cont().store)
    app.get('/customer/Myorders', order_cont().index)
}

module.exports = initRoutes