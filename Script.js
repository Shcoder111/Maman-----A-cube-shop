

const products = [
    {
        id: 1,
        title: "QiYi M Pro 3x3 V3 Pioneer Magnetic MagLev UV",
        category: "3X3",
        price: 1939.55,
        oldPrice: 2239.55,
        rating: 4.9,
        reviews: 123,
        discount: 13,
        deal: true,
        description:
            "The QiYi M Pro 3x3 V3 Pioneer is a high-performance magnetic speed cube with MagLev technology, core magnets and a UV-coated surface. It provides a fast, stable and controllable feel for speedcubing.",
        image:
            "https://th.bing.com/th/id/OIP.dnr9rVF-2PfG9VAfddhQCQHaHa?w=199&h=200&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        id: 2,
        title: "MoYu Super WeiLong 3x3 V2 Magnetic MagLev Ball-Core UV",
        category: "3X3",
        price: 5989.24,
        oldPrice: 7967.24,
        rating: 5.0,
        reviews: 17,
        discount: 25,
        deal: true,
        description:
            "The MoYu Super WeiLong 3x3 V2 is a premium magnetic speed cube featuring MagLev technology, a multi-magnet ball-core system and a grippy UV-coated finish.",
        image:
            "https://th.bing.com/th/id/OIP.d5rkpWuk9y0rGde0aHDY_QHaE8?w=268&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        id: 3,
        title: "GAN 17 MagDrive 3x3 Magnetic MagLev Ball-Core UV",
        category: "3X3",
        price: 7433.50,
        oldPrice: 8258.90,
        rating: 4.5,
        reviews: 30,
        discount: 10,
        deal: false,
        description:
            "The GAN 17 MagDrive 3x3 is a premium flagship speed cube designed for fast and controlled turning. It combines magnetic positioning, MagLev technology, ball-core stability and a UV-coated surface.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/Gan-176175.jpg?v=1786563677&width=1200"
    },

    {
        id: 4,
        title: "Soup Lube Ramen Scented Cube Lubricant",
        category: "lubes",
        price: 966.83,
        oldPrice: 1099,
        rating: 4.5,
        reviews: 33,
        discount: 12,
        deal: true,
        description:
            "Soup Lube is a speed cube lubricant designed to tune the feel and performance of your puzzle. This ramen-scented version adds a fun twist to your cubing setup.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/soup-lube-ramen-scented-lubricant-5ml.jpg?v=1765326672&width=1000"
    },

    {
        id: 5,
        title: "MoYu WeiPo 2x2 V5 Magnetic Ball-Core UV",
        category: "2X2",
        price: 3881.46,
        oldPrice: 4499,
        rating: 4.5,
        reviews: 9,
        discount: 14,
        deal: true,
        description:
            "The MoYu WeiPo 2x2 V5 is a premium magnetic 2x2 speed cube with a multi-magnet ball-core system and UV-coated surface for grip and control.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/Gan-176175.jpg?v=1786563677&width=500"
    },

    {
        id: 6,
        title: "GAN 251 UI 2x2 (Magnetic, Ball-Core, UV Coated) - Bluetooth Smart Cube",
        category: "2X2",
        price: 7768.54,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 48,
        discount: 17,
        deal: true,
        description:
            "The GAN 251 UI 2x2 (Magnetic, Ball-Core, UV Coated) – Bluetooth Smart Cube combines high-end 2x2 speed cube performance with true smart-cube training. It tracks every turn in real time using non-contact hall-effect sensing and a high-precision gyroscope, then syncs to the app for solve playback, stats, lessons, and guided practice. On the hardware side, you get MagLev speed, ball-core stability, and a high-grip UV coated finish—plus wireless fast charging so it’s always ready to train.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/gan-251-ui-2x2-magnetic-ball-core-uv-coated-bluetooth-smart-cube_f5cb93cc.jpg?v=1771619417&width=1000"
    }
    ,

    {
        id: 7,
        title: "MoYu 21x21",
        category: "big-cubes",
        price: 131172.20,
        oldPrice: 145746.35,
        rating: 5.0,
        reviews: 38,
        deal: true,
        description:
            "The MoYu 21x21 is the center of attention in just about any environment. This incredible accomplishment in cubing technology is something that you have to see for yourself to truly appreciate.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/moyu-21x21-3.jpg?v=1771619434&width=1000"
    },
    {
        id: 8,
        title: "ShengShou Mr. M Square-1 (Magnetic)",
        category: "shape-mods",
        price: 960.18,
        oldPrice: 1066.33,
        rating: 4.5,
        reviews: 10,
        deal: true,
        description:
            "ShengShou Mr. M Square-1 Magnetic is a nice entry-level option.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/ShengShou-Mr_-M-Square-1-Magnetic.jpg?v=1771619461&width=1000"
    },
    {
        id: 9,
        title: "GAN 460 4x4 V2 (Magnetic, UV Coated)",
        category: "4X4",
        price: 6324.94,
        oldPrice: 145746.35,
        rating: 5.0,
        reviews: 23,
        deal: true,
        description:
            "The GAN 460 4x4 V2 (Magnetic, UV Coated) is a premium 4x4 speed cube built for fast, accurate turning with strong layer control. Piece magnets help each layer “click” into alignment to reduce mis-turns during high-TPS solves and parity algorithms, while the UV coated exterior adds a durable, glossy, high-grip feel for confident handling. At 60 mm and ~110 g, it offers a stable, competition-ready size without feeling bulky.",
        image:
            "https://speedcubeshop.com/cdn/shop/files/gan-460-4x4-v2-magnetic-uv-coated_6a3397be.jpg?v=1771619519&width=1000"
    }
];


/* =====================================================
   ACCOUNT
===================================================== */

let account =
    JSON.parse(localStorage.getItem("mamanAccount")) || {
        name: "Shcoder_027_Cuber",
        email: "Shcoder_UltimateCuber@gmail.com"
    };

localStorage.setItem(
    "mamanAccount",
    JSON.stringify(account)
);


/* =====================================================
   STATE
===================================================== */

let cart =
    JSON.parse(localStorage.getItem("mamanCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("mamanWishlist")) || [];

let orders =
    JSON.parse(localStorage.getItem("mamanOrders")) || [];

let currentProducts = [...products];
let currentProductId = null;


/* =====================================================
   INIT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    updateAccount();
    renderProducts(products);
    updateCart();
    renderWishlist();
    renderOrders();
    updateAddress();

    const search =
        document.getElementById("searchInput");

    if (search) {
        search.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                searchProducts();
            }
        });
    }
});


/* =====================================================
   ACCOUNT
===================================================== */

function updateAccount() {
    const greeting =
        document.getElementById("accountGreeting");

    const name =
        document.getElementById("accountName");

    const email =
        document.getElementById("accountEmail");

    const detailName =
        document.getElementById("detailName");

    const detailEmail =
        document.getElementById("detailEmail");

    const avatar =
        document.getElementById("avatar");

    const detailPin =
        document.getElementById("detailPin");

    if (greeting) {
        greeting.textContent =
            `Hello, ${account.name}`;
    }

    if (name) {
        name.textContent = account.name;
    }

    if (email) {
        email.textContent = account.email;
    }

    if (detailName) {
        detailName.textContent = account.name;
    }

    if (detailEmail) {
        detailEmail.textContent = account.email;
    }

    if (avatar) {
        avatar.textContent =
            account.name.charAt(0).toUpperCase();
    }

    if (detailPin) {
        detailPin.textContent =
            localStorage.getItem("mamanPIN") || "Not set";
    }
}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {
    const confirmed =
        confirm("Are you sure you want to log out?");

    if (!confirmed) {
        return;
    }

    localStorage.removeItem("mamanAccount");

    account = {
        name: "Shcoder_027_Cuber",
        email: "Shcoder_UltimateCuber@gmail.com"
    };

    localStorage.setItem(
        "mamanAccount",
        JSON.stringify(account)
    );

    updateAccount();

    navigate("home");

    showToast("You have been logged out");
}


/* =====================================================
   NAVIGATION
===================================================== */

function navigate(page, productId = null) {
    const pages = [
        "homePage",
        "productPage",
        "accountPage",
        "ordersPage",
        "wishlistPage",
        "checkoutPage"
    ];

    pages.forEach(id => {
        const element =
            document.getElementById(id);

        if (element) {
            element.classList.add("hidden");
        }
    });

    if (page === "home") {
        document
            .getElementById("homePage")
            .classList.remove("hidden");
    }

    if (page === "product") {
        currentProductId = productId;

        renderProductDetails(productId);

        document
            .getElementById("productPage")
            .classList.remove("hidden");
    }

    if (page === "account") {
        updateAccount();

        document
            .getElementById("accountPage")
            .classList.remove("hidden");
    }

    if (page === "orders") {
        renderOrders();

        document
            .getElementById("ordersPage")
            .classList.remove("hidden");
    }

    if (page === "wishlist") {
        renderWishlist();

        document
            .getElementById("wishlistPage")
            .classList.remove("hidden");
    }

    if (page === "checkout") {
        renderCheckout();

        document
            .getElementById("checkoutPage")
            .classList.remove("hidden");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   PRODUCT RENDER
===================================================== */

function renderProducts(list) {
    currentProducts = [...list];

    const grid =
        document.getElementById("productGrid");

    if (!grid) {
        return;
    }

    if (!list.length) {
        grid.innerHTML = `
            <div class="empty">
                <h2>No products found</h2>
                <p style="margin-top:10px">
                    Try another search or category.
                </p>
            </div>
        `;

        return;
    }

    grid.innerHTML =
        list.map(product => `
            <article class="product">

                <button
                    class="wishlist ${
                        wishlist.includes(product.id)
                            ? "active"
                            : ""
                    }"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Wishlist"
                >
                    ${
                        wishlist.includes(product.id)
                            ? "♥"
                            : "♡"
                    }
                </button>

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${escapeHTML(product.title)}"
                    onclick="navigate('product', ${product.id})"
                    onerror="this.src='https://placehold.co/400x300?text=MaMan'"
                >

                <div
                    class="product-title"
                    onclick="navigate('product', ${product.id})"
                >
                    ${escapeHTML(product.title)}
                </div>

                <div class="rating">
                    ${stars(product.rating)}
                    <span>
                        ${product.reviews.toLocaleString()}
                    </span>
                </div>

                <div>
                    <span class="price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>

                    ${
                        product.oldPrice
                            ? `
                                <span class="old-price">
                                    ₹${product.oldPrice.toLocaleString("en-IN")}
                                </span>
                            `
                            : ""
                    }
                </div>

                ${
                    product.discount
                        ? `
                            <div class="discount">
                                ${product.discount}% off
                            </div>
                        `
                        : ""
                }

                <div class="delivery">
                    FREE delivery
                    <strong>Tomorrow</strong>
                </div>

                <div class="product-actions">

                    <button
                        class="add"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="buy"
                        onclick="buyNow(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>

            </article>
        `).join("");
}


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function renderProductDetails(id) {
    const product =
        products.find(p => p.id === id);

    const container =
        document.getElementById("productDetails");

    if (!container) {
        return;
    }

    if (!product) {
        container.innerHTML = `
            <div class="empty">
                <h2>Product not found</h2>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <section class="product-details">

            <div class="details-image-wrapper">

                <img
                    class="details-image"
                    src="${product.image}"
                    alt="${escapeHTML(product.title)}"
                    onerror="this.src='https://placehold.co/800x600?text=MaMan'"
                >

            </div>

            <div class="details-info">

                <h1>
                    ${escapeHTML(product.title)}
                </h1>

                <div class="details-rating">

                    ${stars(product.rating)}

                    <span>
                        ${product.rating} ·
                        ${product.reviews.toLocaleString()}
                        reviews
                    </span>

                </div>

                <div class="details-price">

                    ₹${product.price.toLocaleString("en-IN")}

                    ${
                        product.oldPrice
                            ? `
                                <span class="details-old-price">
                                    ₹${product.oldPrice.toLocaleString("en-IN")}
                                </span>
                            `
                            : ""
                    }

                </div>

                ${
                    product.discount
                        ? `
                            <div class="details-discount">
                                ${product.discount}% off
                            </div>
                        `
                        : ""
                }

                <p class="details-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="details-delivery">

                    🚚 <strong>FREE delivery</strong>

                    <br><br>

                    Get it by <strong>Tomorrow</strong>

                </div>

                <div class="quantity-control">

                    <strong>Quantity:</strong>

                    <button onclick="changeDetailQuantity(-1)">
                        −
                    </button>

                    <input
                        id="detailQuantity"
                        type="number"
                        value="1"
                        min="1"
                        max="99"
                    >

                    <button onclick="changeDetailQuantity(1)">
                        +
                    </button>

                </div>

                <div class="details-actions">

                    <button
                        class="details-add"
                        onclick="addDetailProductToCart()"
                    >
                        🛒 Add to Cart
                    </button>

                    <button
                        class="details-buy"
                        onclick="buyDetailProduct()"
                    >
                        Buy Now
                    </button>

                    <button
                        class="details-wish"
                        onclick="toggleWishlist(${product.id})"
                    >
                        ${
                            wishlist.includes(product.id)
                                ? "♥ Saved"
                                : "♡ Wishlist"
                        }
                    </button>

                </div>

                <div class="product-features">

                    <h3>Product Information</h3>

                    <ul>

                        <li>
                            Category:
                            ${capitalize(product.category)}
                        </li>

                        <li>
                            Customer rating:
                            ${product.rating}/5
                        </li>

                        <li>
                            ${product.reviews.toLocaleString()}
                            customer reviews
                        </li>

                        <li>
                            FREE delivery available
                        </li>

                    </ul>

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   PRODUCT QUANTITY
===================================================== */

function changeDetailQuantity(amount) {
    const input =
        document.getElementById("detailQuantity");

    if (!input) {
        return;
    }

    let value =
        parseInt(input.value, 10) || 1;

    value += amount;

    value =
        Math.max(
            1,
            Math.min(99, value)
        );

    input.value = value;
}


function addDetailProductToCart() {
    const input =
        document.getElementById("detailQuantity");

    const quantity =
        Math.max(
            1,
            parseInt(input.value, 10) || 1
        );

    const product =
        products.find(p => p.id === currentProductId);

    if (!product) {
        return;
    }

    const existing =
        cart.find(item => item.id === currentProductId);

    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({
            id: currentProductId,
            qty: quantity
        });
    }

    saveCart();
    updateCart();

    showToast(
        `${quantity} item${quantity > 1 ? "s" : ""} added to cart`
    );
}


function buyDetailProduct() {
    const input =
        document.getElementById("detailQuantity");

    const quantity =
        Math.max(
            1,
            parseInt(input.value, 10) || 1
        );

    const existing =
        cart.find(
            item => item.id === currentProductId
        );

    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({
            id: currentProductId,
            qty: quantity
        });
    }

    saveCart();
    updateCart();

    navigate("checkout");
}


/* =====================================================
   STARS
===================================================== */

function stars(rating) {
    let result = "";

    for (let i = 0; i < Math.floor(rating); i++) {
        result += "★";
    }

    while (result.length < 5) {
        result += "☆";
    }

    return result;
}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {
    const query =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();

    const category =
        document
            .getElementById("searchCategory")
            .value;

    const results =
        products.filter(product => {

            const textMatch =
                !query ||
                product.title
                    .toLowerCase()
                    .includes(query) ||
                product.category
                    .toLowerCase()
                    .includes(query);

            const categoryMatch =
                category === "all" ||
                product.category === category;

            return textMatch && categoryMatch;
        });

    navigate("home");

    document.getElementById(
        "productHeading"
    ).textContent =
        query
            ? `Search results for "${query}"`
            : category === "all"
                ? "Products"
                : capitalize(category);

    renderProducts(results);
}


/* =====================================================
   CATEGORY
===================================================== */

function filterCategory(category) {
    const results =
        products.filter(
            product => product.category === category
        );

    navigate("home");

    document.getElementById(
        "productHeading"
    ).textContent =
        category === "lubes"
            ? "Lubricants"
            : capitalize(category);

    renderProducts(results);
}


/* =====================================================
   DEALS
===================================================== */

function showDeals() {
    const deals =
        products.filter(product => product.deal);

    navigate("home");

    document.getElementById(
        "productHeading"
    ).textContent =
        "Today's Deals";

    renderProducts(deals);
}


/* =====================================================
   SORT
===================================================== */

function sortProducts() {
    const type =
        document.getElementById("sortSelect").value;

    const list = [...currentProducts];

    if (type === "low") {
        list.sort(
            (a, b) => a.price - b.price
        );
    }

    if (type === "high") {
        list.sort(
            (a, b) => b.price - a.price
        );
    }

    if (type === "rating") {
        list.sort(
            (a, b) => b.rating - a.rating
        );
    }

    if (type === "discount") {
        list.sort(
            (a, b) => b.discount - a.discount
        );
    }

    renderProducts(list);
}


/* =====================================================
   CART
===================================================== */

function saveCart() {
    localStorage.setItem(
        "mamanCart",
        JSON.stringify(cart)
    );
}


function addToCart(id) {
    const product =
        products.find(p => p.id === id);

    if (!product) {
        return;
    }

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id,
            qty: 1
        });
    }

    saveCart();
    updateCart();

    showToast("Added to your cart");
}


function updateCart() {
    const count =
        cart.reduce(
            (sum, item) => sum + item.qty,
            0
        );

    document.getElementById(
        "cartCount"
    ).textContent = count;

    const container =
        document.getElementById("cartItems");

    if (!container) {
        return;
    }

    if (!cart.length) {
        container.innerHTML = `
            <div class="empty">
                <div style="font-size:55px">
                    🛒
                </div>

                <h2>Your cart is empty</h2>

                <p style="margin-top:10px">
                    Add some products to get started.
                </p>
            </div>
        `;

        document.getElementById(
            "subtotal"
        ).textContent = "₹0";

        return;
    }

    let total = 0;

    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) {
                return "";
            }

            total +=
                product.price * item.qty;

            return `
                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.title)}"
                        onerror="this.src='https://placehold.co/80x80?text=MaMan'"
                    >

                    <div>

                        <h4>
                            ${escapeHTML(product.title)}
                        </h4>

                        <strong>
                            ₹${product.price.toLocaleString("en-IN")}
                        </strong>

                        <div class="qty">

                            <button
                                onclick="changeQty(${product.id}, -1)"
                            >
                                −
                            </button>

                            <strong>
                                ${item.qty}
                            </strong>

                            <button
                                onclick="changeQty(${product.id}, 1)"
                            >
                                +
                            </button>

                            <button
                                class="delete"
                                onclick="removeFromCart(${product.id})"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>
            `;

        }).join("");

    document.getElementById(
        "subtotal"
    ).textContent =
        "₹" + total.toLocaleString("en-IN");
}


function changeQty(id, amount) {
    const item =
        cart.find(
            x => x.id === id
        );

    if (!item) {
        return;
    }

    item.qty += amount;

    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();
    updateCart();
}


function removeFromCart(id) {
    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();
    updateCart();

    showToast("Removed from cart");
}


function openCart() {
    document
        .getElementById("overlay")
        .classList.remove("hidden");

    document
        .getElementById("cartDrawer")
        .classList.remove("hidden");
}


function closeCart() {
    document
        .getElementById("overlay")
        .classList.add("hidden");

    document
        .getElementById("cartDrawer")
        .classList.add("hidden");
}


/* =====================================================
   BUY NOW
===================================================== */

function buyNow(id) {
    const product =
        products.find(p => p.id === id);

    if (!product) {
        return;
    }

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id,
            qty: 1
        });
    }

    saveCart();
    updateCart();

    navigate("checkout");
}


/* =====================================================
   WISHLIST
===================================================== */

function toggleWishlist(id) {
    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                x => x !== id
            );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist");
    }

    localStorage.setItem(
        "mamanWishlist",
        JSON.stringify(wishlist)
    );

    renderProducts(currentProducts);
    renderWishlist();

    if (currentProductId === id) {
        renderProductDetails(id);
    }
}


function renderWishlist() {
    const grid =
        document.getElementById("wishlistGrid");

    if (!grid) {
        return;
    }

    const list =
        products.filter(
            product => wishlist.includes(product.id)
        );

    if (!list.length) {

        grid.innerHTML = `
            <div class="empty">

                <div style="font-size:55px">
                    ❤️
                </div>

                <h2>Your wishlist is empty</h2>

                <p style="margin-top:10px">
                    Save products here for later.
                </p>

                <button
                    class="primary"
                    style="margin-top:20px"
                    onclick="navigate('home')"
                >
                    Browse Products
                </button>

            </div>
        `;

        return;
    }

    grid.innerHTML =
        list.map(product => `
            <article class="product">

                <button
                    class="wishlist active"
                    onclick="toggleWishlist(${product.id})"
                >
                    ♥
                </button>

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${escapeHTML(product.title)}"
                    onclick="navigate('product', ${product.id})"
                    onerror="this.src='https://placehold.co/400x300?text=MaMan'"
                >

                <div
                    class="product-title"
                    onclick="navigate('product', ${product.id})"
                >
                    ${escapeHTML(product.title)}
                </div>

                <div class="rating">

                    ${stars(product.rating)}

                    <span>
                        ${product.reviews.toLocaleString()}
                    </span>

                </div>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <div class="product-actions">

                    <button
                        class="add"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="buy"
                        onclick="buyNow(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>

            </article>
        `).join("");
}


/* =====================================================
   ADDRESS
===================================================== */

function setAddress() {
    const old =
        localStorage.getItem("mamanPIN") || "";

    const pin =
        prompt(
            "Enter your delivery PIN code:",
            old
        );

    if (pin === null) {
        return;
    }

    const cleanPin =
        pin.trim();

    if (!cleanPin) {
        showToast("Please enter a PIN");
        return;
    }

    if (!/^\d{4,10}$/.test(cleanPin)) {
        showToast("Please enter a valid PIN code");
        return;
    }

    localStorage.setItem(
        "mamanPIN",
        cleanPin
    );

    updateAddress();
    updateAccount();

    showToast("Delivery address updated");
}


function updateAddress() {
    const pin =
        localStorage.getItem("mamanPIN");

    document.getElementById(
        "addressText"
    ).textContent =
        pin || "India";
}


/* =====================================================
   ORDERS
===================================================== */

function renderOrders() {
    const container =
        document.getElementById("ordersContainer");

    if (!container) {
        return;
    }

    if (!orders.length) {

        container.innerHTML = `
            <div class="empty">

                <div style="font-size:55px">
                    📦
                </div>

                <h2>No orders yet</h2>

                <p style="margin-top:10px">
                    Your orders will appear here.
                </p>

                <button
                    class="primary"
                    style="margin-top:20px"
                    onclick="navigate('home')"
                >
                    Start Shopping
                </button>

            </div>
        `;

        return;
    }

    container.innerHTML =
        orders.map(order => `
            <div class="order">

                <div class="order-top">

                    <div>

                        <strong>
                            Order #${escapeHTML(order.id)}
                        </strong>

                        <p
                            style="
                                margin-top:6px;
                                color:#666;
                            "
                        >
                            ${escapeHTML(order.date)}
                        </p>

                    </div>

                    <div class="order-status">
                        ${escapeHTML(order.status)}
                    </div>

                </div>

                ${order.items.map(item => `
                    <p
                        style="
                            padding:8px 0;
                            border-bottom:1px solid #eee;
                        "
                    >
                        ${escapeHTML(item.title)}
                        × ${item.qty}
                    </p>
                `).join("")}

                <div class="order-payment">

                    Payment:

                    <strong>
                        ${itemizePayment(order.payment)}
                    </strong>

                </div>

                <h3 style="margin-top:15px">

                    Total:
                    ₹${Number(order.total).toLocaleString("en-IN")}

                </h3>

            </div>
        `).join("");
}


function itemizePayment(payment) {
    if (payment === "cod") {
        return "Cash on Delivery";
    }

    if (payment === "upi") {
        return "UPI";
    }

    if (payment === "card") {
        return "Credit / Debit Card";
    }

    return payment || "Not specified";
}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {
    if (!cart.length) {
        showToast("Your cart is empty");
        return;
    }

    closeCart();
    navigate("checkout");
}


function renderCheckout() {
    const summary =
        document.getElementById("checkoutSummary");

    if (!summary) {
        return;
    }

    let total = 0;

    summary.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) {
                return "";
            }

            const amount =
                product.price * item.qty;

            total += amount;

            return `
                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        gap:15px;
                        padding:10px 0;
                        border-bottom:1px solid #eee;
                    "
                >
                    <span>
                        ${escapeHTML(product.title)}
                        × ${item.qty}
                    </span>

                    <strong>
                        ₹${amount.toLocaleString("en-IN")}
                    </strong>
                </div>
            `;

        }).join("");

    document.getElementById(
        "checkoutTotal"
    ).textContent =
        total.toLocaleString("en-IN");

    document.getElementById(
        "checkoutName"
    ).value =
        account.name;

    const pin =
        localStorage.getItem("mamanPIN");

    if (pin) {
        document.getElementById(
            "checkoutPin"
        ).value = pin;
    }

    updatePaymentFields();
}


/* =====================================================
   PAYMENT
===================================================== */

function updatePaymentFields() {
    const selected =
        document.querySelector(
            'input[name="payment"]:checked'
        );

    const upiFields =
        document.getElementById("upiFields");

    const cardFields =
        document.getElementById("cardFields");

    if (!upiFields || !cardFields) {
        return;
    }

    upiFields.classList.add("hidden");
    cardFields.classList.add("hidden");

    if (!selected) {
        return;
    }

    if (selected.value === "upi") {
        upiFields.classList.remove("hidden");
    }

    if (selected.value === "card") {
        cardFields.classList.remove("hidden");
    }
}


/* =====================================================
   PLACE ORDER
===================================================== */

function placeOrder() {
    if (!cart.length) {
        showToast("Your cart is empty");
        return;
    }

    const name =
        document
            .getElementById("checkoutName")
            .value
            .trim();

    const address =
        document
            .getElementById("checkoutAddress")
            .value
            .trim();

    const city =
        document
            .getElementById("checkoutCity")
            .value
            .trim();

    const pin =
        document
            .getElementById("checkoutPin")
            .value
            .trim();

    if (!name || !address || !city || !pin) {
        showToast("Please complete your address");
        return;
    }

    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        )?.value || "cod";

    if (payment === "upi") {

        const upi =
            document
                .getElementById("upiId")
                .value
                .trim();

        if (!upi) {
            showToast("Please enter your UPI ID");
            return;
        }

        if (!upi.includes("@")) {
            showToast("Please enter a valid UPI ID");
            return;
        }
    }

    if (payment === "card") {

        const cardNumber =
            document
                .getElementById("cardNumber")
                .value
                .trim();

        const cardName =
            document
                .getElementById("cardName")
                .value
                .trim();

        const expiry =
            document
                .getElementById("cardExpiry")
                .value
                .trim();

        const cvv =
            document
                .getElementById("cardCVV")
                .value
                .trim();

        if (
            !cardNumber ||
            !cardName ||
            !expiry ||
            !cvv
        ) {
            showToast(
                "Please complete your card details"
            );

            return;
        }
    }

    let total = 0;

    const items =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) {
                return null;
            }

            total +=
                product.price * item.qty;

            return {
                title: product.title,
                qty: item.qty
            };
        })
        .filter(Boolean);

    const order = {
        id:
            "MAMAN-" +
            Math.floor(
                100000 +
                Math.random() * 900000
            ),

        date:
            new Date().toLocaleString(),

        status:
            "Order placed",

        payment,

        total,

        items
    };

    orders.unshift(order);

    localStorage.setItem(
        "mamanOrders",
        JSON.stringify(orders)
    );

    localStorage.setItem(
        "mamanPIN",
        pin
    );

    cart = [];

    saveCart();
    updateCart();
    renderOrders();

    navigate("orders");

    showToast(
        "Order placed successfully!"
    );
}


/* =====================================================
   HELPERS
===================================================== */

function capitalize(text) {
    if (!text) {
        return "";
    }

    return text.charAt(0).toUpperCase() +
        text.slice(1);
}


function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(message) {
    const toast =
        document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
}