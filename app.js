$(function () {
    var products = [
        { name: 'Samsung Tv', price: 1500, id: 1, description:'On 17 April 2014, Samsung had announced it was discontinuing its ebook store effective 1 July 2014 and had partnered with Amazon to introduce the Kindle for Samsung app, that will permit Galaxy device users using Android 4.0 and up to buy and read content from Amazons catalog of periodicals and ebooks', image: 'https://www.hsb.se/contentassets/06c43c9b5eb14b0ebda668b222366b71/tv.jpg?width=705&scale=both&mode=crop', category: 'ELEKTRONIK'},
        { name: 'Levis Jacka', price: 255, id: 2, description: 'Jacob Davis, en skräddare från Reno i Nevada, slår sig samman med Levi Strauss för att skapa och patentera arbetskläder som förstärks med nitar och tillverkas av brunt buldantyg av bomull och blått denimtyg.', image: 'https://res.cloudinary.com/stylight/image/upload/e_trim/t_web_product_325x325/q_auto:eco,f_auto/product-levis-sherpa-trucker-jeansjacka-needle-park-151047598.jpg', category: 'KLÄDER' },
        { name: 'Toysrus', price: 425, id: 3, description: 'Leksaker, som ord använt i svenskan sedan 1729, från isländskans "leika", är de föremål som företrädesvis barn använder vid lek. Dessa är ofta pedagogiska', image: 'https://d3i62cpvzxvn0d.cloudfront.net/cached/gifts/54068/s300_image20151127-3-178n8a2.jpg', category: 'LEKSAKER' },
        { name: 'Iphone X', price: 11120, id: 4, description: 'På ett förbluffande litet utrymme ryms några av de mest sofistikerade tekniker vi har utvecklat, till exempel kamerorna och sensorerna bakom Face ID.', image: 'https://www.tele2.se/shop/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_front.png', category: 'TELEFONER' },
        { name: 'Adidas Skor', price: 800, id: 5, description: 'Dessa skor för tjejer är slimmade och stilrena med en strömlinjeformad löparlook. Diskret mönster ton-i-ton pryder ovandelen i lätt mesh. Dämpning med Cloudfoam ger en extra mjuk och smidig känsla.', image: 'http://www.fiakfoto.se/images/large/adidas%20sneakers/outlet%20skor%200748%20Nike%20basketskor%20Her%20394_LRG.jpg', category: 'SPORT' },
    ];
    
    var cart = [];
    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `
          <li class="product col-3">
               <div class="product-content">
               <img src="${item.image}" alt="product image">
               <h4>
               ${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small>
               </h4>
               <p>${item.description}</p>
               </div>
               <button type="button" id="${item.id}">Köp Nu</button>
          </li>
        `;
        });

        $(location).html(template);
    };
    appendList(products, $('.product-list'));


    var addToCart = function (array, id, location) { //Lägger till en produkt till varukorg
        var a = array.find(function (i) {
            return i.id === id;
        });

        cart.push(a);


        var item = `
            <li class="item" id="${a.id}">
          <h4>${a.name}</h4>
          <button type="button">X</button>
    </li>
    
    `;
        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    var removeFromCart = function (array, removedItem) {
        array.splice(removedItem, 1);
    };

    var populateCart = function (list, location) {
        var item = `
          <li class="item" id="${list.id}">
            <h4>${list.name}</h4>
            <button type="button">X</button>
            </li>
        `;
        $('span.amount').text(list.length);
    };
        $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));
    });
        $('.cart-list').on('click', 'button', function (e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));

    });
});