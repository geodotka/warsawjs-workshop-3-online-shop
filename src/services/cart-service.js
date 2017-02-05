
export default class CartService {

    constructor(storageService){
        this.storageService = storageService;
        this.cart = this.storageService.read('xxxx') || [];
    }

    addToCart(product){
        let productsCount = parseInt(document.getElementById(product.id).value);
        for (let i=0; i < productsCount; i++){
            this.cart.push(product);
        }
        this.storageService.save('xxxx', this.cart)
    }

    getCart(){
        return this.cart
    }

    getCartSize(){
        return this.cart.length
    }

}
