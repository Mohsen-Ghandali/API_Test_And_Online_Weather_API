const apiUrl = "YOUR WEBSITE";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        document.getElementById("error-message").innerHTML =
            "Error fetching data link : " + error.message;
    }
}

let isMenuVisible = false;
let isContentVisible = false;
let isSliderVisible = false;
let areProductsVisible = false;
let isFooterVisible = false;

async function showMenu() {
    try {
        const url = apiUrl + "menu.json";
        const data = await fetchData(url);
        const menuData = data.menu;
        const menuList = document.getElementById("menu-list");

        if (isMenuVisible) {
            menuList.innerHTML = "";
            isMenuVisible = false;
        } else {
            menuData.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${item.link}">${item.name}</a>`;

                if (item.dropdown && item.dropdown.length > 0) {
                    const dropdownList = document.createElement("ul");
                    item.dropdown.forEach((subItem) => {
                        const subListItem = document.createElement("li");
                        subListItem.innerHTML = `<a href="${subItem.link}">${subItem.name}</a>`;
                        dropdownList.appendChild(subListItem);
                    });
                    listItem.appendChild(dropdownList);
                }

                menuList.appendChild(listItem);
            });
            isMenuVisible = true;
        }
    } catch (error) {
        document.getElementById("error-message").innerHTML =
            "Error checking menu: " + error.message;
    }
}

async function showContent() {
    try {
        const url = apiUrl + "content.json";
        const data = await fetchData(url);
        const contentData = data.content;
        const contentDiv = document.getElementById("content");

        if (isContentVisible) {
            contentDiv.innerHTML = "";
            isContentVisible = false;
        } else {
            contentData.forEach((item) => {
                const contentItem = document.createElement("div");
                contentItem.innerHTML = `<h2>${item.h1}</h2><p>${item.text}</p>`;
                contentDiv.appendChild(contentItem);
            });
            isContentVisible = true;
        }
    } catch (error) {
        document.getElementById("error-message").innerHTML =
            "Error checking content: " + error.message;
    }
}

async function showSlider() {
    try {
        const url = apiUrl + "slider.json";
        const data = await fetchData(url);
        const sliderData = data.slider;
        const sliderDiv = document.getElementById("slider");

        if (isSliderVisible) {
            sliderDiv.innerHTML = "";
            isSliderVisible = false;
        } else {
            sliderData.forEach((item) => {
                const sliderItem = document.createElement("div");
                sliderItem.innerHTML = `<img src="${item.url}" alt="${item.alt}">` + `<h4>${item.title}</h4>` + `<p>${item.description}</p>`;
                sliderDiv.appendChild(sliderItem);
            });
            isSliderVisible = true;
        }
    } catch (error) {
        document.getElementById("error-message").innerHTML =
            "Error checking slider: " + error.message;
    }
}

async function showProducts() {
    try {
        const url = apiUrl + "products.json";
        const data = await fetchData(url);
        const productData = data.product;
        const productsDiv = document.getElementById("products");

        if (areProductsVisible) {
            productsDiv.innerHTML = "";
            areProductsVisible = false;
        } else {
            productData.forEach((item) => {
                const productItem = document.createElement("div");
                productItem.innerHTML = `<h4>${item.name}</h4><img src="${item.img}" alt="${item.alt}"><p class="text">Price: ${item.price}€</p>`;
                productsDiv.appendChild(productItem);
            });
            areProductsVisible = true;
        }
    } catch (error) {
        document.getElementById("error-message").innerHTML =
            "Error checking products: " + error.message;
    }
}

async function showFooter() {
    try {
        const url = apiUrl + "footer.json";
        const data = await fetchData(url);
        const footerData = data.footer;
        const footerDiv = document.getElementById("footer");

        if (isFooterVisible) {
            footerDiv.innerHTML = "";
            isFooterVisible = false;
        } else {
            footerData.forEach((item) => {
                const footerItem = document.createElement("div");
                footerItem.innerHTML = `<a href="${item.socialMedia}"><img src="${item.socialMedia}" alt="${item.alt}"></a>`;
                footerDiv.appendChild(footerItem);
            });
            isFooterVisible = true;
        }
    } catch (error) {
        document.getElementById("error-message").innerHTML =
            "Error checking footer: " + error.message;
    }
}
