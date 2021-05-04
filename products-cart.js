let products = [{
    name : "TYREN 4G LOGO HANDBAG",
    img_url:"https://www.noixdarec.com/94956-large_default/guess-tyren-handbag-logo-4g-brown-bl.jpg",
    size :"26x20x8 cm",
    price: {
     amount: 109.00,
     unit: "£"
}
},
{
    name : "STEPHI CROC PRINT HANDBAG",
    img_url:"https://z.nooncdn.com/products/tr:n-t_800/v1613625622/N43478587A_1.jpg",
    size :"27x21x13 cm",
    price: {
     amount: 129.00,
     unit: "£"
}
},
{  name : "Carabel Croco Black Shoulder Bag",
   img_url:"https://www.noixdarec.com/94710-large_default/guess-carabel-bag-a-bandouliere-croc-black.jpg",
   size :"25x17x6 cm",
   price: {
    amount: 109.00,
    unit: "£"
}
},
{  name : "Vikky Bag A Back Brown",
   img_url:"https://www.noixdarec.com/89748-large_default/guess-vikky-brown-backpack.jpg",
   size :"28x33.5x12 cm",
   price: {
    amount: 135.00,
    unit: "£"
}
},
{  name : "Wilder Duffle Baluchon Travel Bag",
   img_url:"https://www.noixdarec.com/104282-large_default/guess-wilder-duffle-baluchon-travel-bag-45-cm-brown.jpg",
   size :"45x26x23 cm",
   price: {
    amount: 145.00,
    unit: "£"
}
},
{  name : "PALOMA LAMINATED HANDBAG",
   img_url:"https://img.guess.com/image/upload/w_1500,c_scale,/f_auto,q_auto/fl_strip_profile/e_sharpen,q_auto/v1/EU/Style/ECOMM/HWCM8112060-GOL",
   size :"60x40x40 cm",
   price: {
    amount: 109.00,
    unit: "£"
}
},

]
let cart = []

function addToCart(i) {
    let message = `The product "${products[i].name}" is in your cart !`
    let qty = parseInt(prompt(" Products quantity: ")) 
    !qty ? (qty = 1) : qty
    for (let n = 0; n < cart.length; n++) {
        if (products[i].name == cart[n].name) {
            products[i].qty += qty
            alert(message)
            showCartQty()
            return }
    }

    products[i].qty = qty
    cart.push(products[i])
    alert(message)
    showCartQty()
}

function showCart() {
    listBuyProduct.innerHTML = ``
    for (let i = 0; i < cart.length; i++) {
        listBuyProduct.innerHTML += 
        `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${cart[i].name}</td>
            <td>${cart[i].price.amount} ${cart[i].price.unit}</td>
            <td>${cart[i].qty}</td>
            <td>${cart[i].qty * cart[i].price.amount} ${cart[i].price.unit}</td>
        </tr>
        ` }
}

function showCartQty() {
    qtyCart.innerHTML = ``
    let totalQty = 0
    for (let i = 0; i < cart.length; i++) {
        totalQty += cart[i].qty }
    qtyCart.innerHTML += `<span class="qtyCart">${totalQty}</span>`}



function showProducts(list) {
    catalog.innerHTML = ``
    for (let i = 0; i < list.length; i++) {
        catalog.innerHTML += `
        <div class="product col text-center py-3">
            <h4>${list[i].name}</h4>
            <img src="${list[i].img_url}" alt="${i}">
            <h6>${list[i].size}</h6>
            <div>${list[i].price.amount} ${list[i].price.unit}</div>
            <button class="btn btn-dark" onclick="addToCart(${i})">ADD to Bag</button>
        </div>
        `  }
}

showProducts(products)
    

