const loacalhost = "http://127.0.0.1:8000";
const apiURL = "/api";

const endpoint = `${loacalhost}${apiURL}`;

export const productListURL = `${endpoint}/products/`;
export const productDetailURL = id => `${endpoint}/products/${id}/`;
export const addToCartURL = `${endpoint}/add-to-cart/`;