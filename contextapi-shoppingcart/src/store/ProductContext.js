import  { createContext } from 'react';

const ProductContext = createContext({
    products: [],
    cartProducts:[],
    showModel: false,
});

export default ProductContext