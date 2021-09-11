import axios from 'axios'
import swal from 'sweetalert';

let addToCart = document.querySelectorAll(".cart")
let cartCounter = document.querySelector('#cart_count')

function updateCart(pizza)
{
    axios.post('/update-cart',pizza).then(res =>{
        console.log(res)
        cartCounter.innerText = res.data.totalQty
        swal({
            title: "Item added to cart!",
            text: "One more pizza pleasee",
            icon: "success",
            button:"checkout",
            timer:3000
        })
        })
}
   // button listner add to cart
    addToCart.forEach((btn)=>{
        btn.addEventListener('click',(e)  =>{
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        console.log(pizza)
        })
    })







