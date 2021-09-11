const Order=require('../../../models/order')

function order_cont(){
    return{
        store(req,res){
            //validate request
            const{ name, checkoutemail, phone, address, postcode, town }=req.body
            //if(!name || !phone || !checkoutemail || !phone || !address|| !postcode|| !town ){
              //  req.flash('error', 'All fields are requierd')
               // return res.redirect('customer/checkout')
            //}
            const order = new Order({
                customerId: req.user._id,
                items: req.session.cart.items,
                name: name,
                email:checkoutemail,
                phone: phone,
                address:address,
                post_code:postcode,
                city:town
            })
            console.log(req.body)
            order.save().then(result =>{
                req.flash('success', 'Order Placed Successfully')
                return res.redirect('/')

            }).catch(err => {
                req.flash('error','Something went wrong')
                return res.redirect('/cart')
            })
        },
        async index(req,res){
            const orders =await Order.find({ customerId: req.user._id })
            res.render('customer/Myorders', { orders:orders })
        }
    }
}
module.exports =order_cont