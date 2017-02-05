// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <div class="cart">
        Koszyk: {{ $ctrl.cart.getCartSize() }}
        <ul>
            <li ng-repeat="product in $ctrl.cart.getCart() track by $index">{{ product.title }}</li>
        </ul>
    </div>
`;


export default class CartComponent {
    constructor(){
        this.controller = CartController;
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
