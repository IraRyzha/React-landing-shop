const getProducts = (url) => {
  return new Promise((resolve) => {
    const products = [
      {
        id: 1,
        photo:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
        name: "Basic Tee",
        options: {
          color: "Black",
        },
        price: "35",
        currency: "$",
        description:
          "A classic basic tee made from soft and comfortable cotton fabric, perfect for everyday wear.",
        rate: 4,
        reviews: 25,
      },
      {
        id: 2,
        photo:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg",
        name: "Earthen Mug",
        options: {
          color: "Matte Black",
        },
        price: "28",
        currency: "$",
        description:
          "Enjoy your favorite hot beverages in style with this beautifully crafted earthen mug in matte black finish.",
        rate: 5,
        reviews: 48,
      },
      {
        id: 3,
        photo:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-product-03.jpg",
        name: "Leatherbound Daily Journal Set",
        options: {
          color: "Natural",
        },
        price: "28",
        currency: "$",
        description:
          "Stay organized and stylish with this elegant leatherbound daily journal set, featuring a natural color leather cover.",
        rate: 3,
        reviews: 12,
      },
      {
        id: 4,
        photo:
          "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg",
        name: "Organizer Set",
        options: {
          color: "Brown",
        },
        price: "149",
        currency: "$",
        description:
          "Maximize your productivity with this comprehensive organizer set, designed to keep your workspace tidy and efficient.",
        rate: 4,
        reviews: 36,
      },
      {
        id: 5,
        photo:
          "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg",
        name: "Mini-Sketchbooks",
        options: {
          color: "Light Brown",
        },
        price: "80",
        currency: "$",
        description:
          "Unleash your creativity on the go with these mini-sketchbooks, featuring light brown covers and high-quality paper.",
        rate: 5,
        reviews: 56,
      },
      {
        id: 6,
        photo:
          "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        name: "Throwback Hip Bag",
        options: {
          color: "Salmon",
        },
        price: "90",
        currency: "$",
        description:
          "Make a fashion statement with this throwback hip bag in vibrant salmon color, perfect for carrying your essentials with style.",
        rate: 3,
        reviews: 18,
      },
      {
        id: 7,
        photo:
          "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
        name: "Medium Stuff Satchel",
        options: {
          color: "Blue",
        },
        price: "32",
        currency: "$",
        description:
          "Stay organized on the go with this medium-sized stuff satchel in a classic blue color, featuring multiple compartments for easy storage.",
        rate: 4,
        reviews: 42,
      },
      {
        id: 8,
        photo:
          "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
        name: "Zip Tote Basket",
        options: {
          color: "White and black",
        },
        price: "140",
        currency: "$",
        description:
          "Elevate your shopping experience with this stylish zip tote basket, designed with a modern blend of white and black colors.",
        rate: 5,
        reviews: 68,
      },
    ];
    setTimeout(() => {
      return resolve(products);
    }, 2000);
  });
};

export default getProducts;
