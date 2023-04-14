const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const productAside = document.querySelector('.product-detail');

const CardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('mouseover', () => {
    desktopMenu.style.visibility = 'visible';
})
navEmail.addEventListener('mouseleave', () => {
    setTimeout(() => {
        desktopMenu.style.visibility = 'hidden';
    }, 1000)
});

const toggleMobileMenu = () => {
    if(!productAside.classList.contains('inactive')) {
        productAside.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    } else {
        mobileMenu.classList.toggle('inactive');
    }
}
const toggleAside = () => {
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
        productAside.classList.toggle('inactive');
    } else {
        productAside.classList.toggle('inactive');
    }
}

const productlist = [];
productlist.push({
    name: 'nike',
    price: 120,
    image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/296481-300-300/FD082-1-100-1.jpg?v=638144896063070000',
})
productlist.push({
    name: 'adidas',
    price: 100,
    image: 'https://i.ebayimg.com/images/g/NIUAAOSw6bVi0MlM/s-l1600.jpg',
})
productlist.push({
    name: 'nike',
    price: 120,
    image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/296481-300-300/FD082-1-100-1.jpg?v=638144896063070000',
})
productlist.push({
    name: 'adidas',
    price: 100,
    image: 'https://i.ebayimg.com/images/g/NIUAAOSw6bVi0MlM/s-l1600.jpg',
})
productlist.push({
    name: 'nike',
    price: 120,
    image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/296481-300-300/FD082-1-100-1.jpg?v=638144896063070000',
})
productlist.push({
    name: 'adidas',
    price: 100,
    image: 'https://i.ebayimg.com/images/g/NIUAAOSw6bVi0MlM/s-l1600.jpg',
})
productlist.push({
    name: 'nike',
    price: 120,
    image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/296481-300-300/FD082-1-100-1.jpg?v=638144896063070000',
})
productlist.push({
    name: 'adidas',
    price: 100,
    image: 'https://i.ebayimg.com/images/g/NIUAAOSw6bVi0MlM/s-l1600.jpg',
})

const renderProducts = (productArr) => {
    for(product of productArr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');  
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');   
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/shoeStore_icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        CardsContainer.appendChild(productCard);
    }
}

renderProducts(productlist);