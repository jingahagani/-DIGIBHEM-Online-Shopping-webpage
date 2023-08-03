const product = [
    {
        id: 0,
        image: 'images/a1.png',
        title: 'Airpods',
        price: 100,
    },
    {
        id: 1,
        image: 'images/iphone-13-pro.png',
        title: 'Iphone 13 pro',
        price: 1000,
    },
    {
        id: 2,
        image: 'images/laptop2.png',
        title: 'Laptop',
        price: 200,
    },
    {
        id: 3,
        image: 'images/t1.png',
        title: 'Ipad',
        price: 300,
    },
    {
        id: 4,
        image: 'images/pcm1.png',
        title: 'PC Moniter',
        price: 600,
    },
    {
        id: 5,
        image: 'images/phone1.png',
        title: 'iPhone x',
        price: 500,
    },
    {
        id: 6,
        image: 'images/h1.png',
        title: 'Headphone',
        price: 60,
    },
    {
        id: 7,
        image: 'images/pr1.png',
        title: 'Washing Machine',
        price: 100.50,
    },
    {
        id: 8,
        image: 'images/pr2.png',
        title: 'AC',
        price: 500,
    },
    {
        id: 9,
        image: 'images/pr3.png',
        title: 'Microwave Oven',
        price: 200.30,
    },
    {
        id: 10,
        image: 'images/pr4.png',
        title: 'Fridge',
        price: 300,
    },
    {
        id: 11,
        image: 'images/pr5.png',
        title: 'Fan',
        price: 50.60,
    },
    {
        id: 12,
        image: 'images/pr6.png',
        title: 'Fridge',
        price: 1500,
    },
    {
        id: 13,
        image: 'images/pr7.png',
        title: 'Gaming PC',
        price: 500.60,
    },
    {
        id: 14,
        image: 'images/pr8.png',
        title: 'Moniter',
        price: 250,
    },
    {
        id: 15,
        image: 'images/pr9.png',
        title: 'Smart Watch',
        price: 30.20,
    },
    {
        id: 16,
        image: 'images/pr10.png',
        title: 'Power Bank',
        price: 100.50,
    },
    {
        id: 17,
        image: 'images/pr11.png',
        title: 'Gaming Mouse',
        price: 30,
    },
    {
        id: 18,
        image: 'images/pr12.png',
        title: 'Joysticks',
        price: 30,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}