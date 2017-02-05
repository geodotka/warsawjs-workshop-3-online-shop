// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <div class="cart">
        Koszyk: {{ $ctrl.cart.getCartSize() }}
    </div>
`;


export default class CartComponent {
    constructor(){
        this.controller = CartController
    }

    template(){
        return TEMPLATE;
    }

}

class CartController {

    constructor(cartService){
        this.cart = cartService
    }

}
