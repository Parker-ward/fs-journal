let iceCreams = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

let cart = []

function addItemToCart(icecreamName){
    let foundIcecream = iceCreams.find(iceCream => iceCream.name == icecreamName)
    console.log(foundIcecream);
    cart.push(foundIcecream)

// TODO
drawCart()

}

function drawCart(){
    let cartElem = document.getElementById('cart')
    let template = ''

    cart.forEach(item => {
        template += `<div>${item.name} $${item.price}</div>`
    })
    cartElem.innerHTML = template

    getTotal()
}


function getTotal(){
    let total = 0
    cart.forEach(p =>{
        total += p.price
    })
    return total
}

function checkOut(){}



