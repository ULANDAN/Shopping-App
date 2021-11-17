const PRODUCTS = [
    {
        id: 1,
        name: 'Round neck',
        price: 20,
        image: require('../assets/products/ee.jpg'),
        description: 'Very comfortable'
    },
    {
        id: 2,
        name: 'Official',
        price: 100,
        image: require('../assets/products/dd.jpg'),
        description: 'For official dates'
    },
    {
        id: 3,
        name: 'Casual',
        price: 50,
        image: require('../assets/products/ss.jfif'),
        description: 'For normal outing'
    },
    {
        id: 4,
        name: 'Shades',
        price: 45,
        image: require('../assets/products/kk.jpg'),
        description: 'For everyday activities'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}