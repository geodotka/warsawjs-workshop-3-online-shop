// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <section class="product">
        <header class="product-header">
            {{ $ctrl.productData.title }}
            <span class="product-price">{{ $ctrl.productData.price }} zł</span>
        </header>
        <div class="product-img">
            <img ng-src="{{ $ctrl.productData.image }}">
            <span>{{ $ctrl.productData.description }}</span>
        </div>
        <div class="product-footer">
            <button type="button" ng-click="$ctrl.addProductToCart()">DO KOSZYKA</button>
            <input type="number" value="1" id="{{ $ctrl.productData.id }}">
        </div>
    </section>
`;


export default class ProductComponent {
    constructor(){
        this.bindings = {
            'productData': '='
        };   //klucz nazwa atrybutu, '=' oznacza dwukierunkowy przepływ danych, < jednokierunkowy przepływ danych
        this.controller = ProductController;
    }

    template(){
        return TEMPLATE;
    }

}


class ProductController {

    constructor(cartService){
        this.cartService = cartService
    }

    $onInit(){
        // tu już jest this.productData i dopiero tu, bo w constructorze jeszcze nie ma
    }

    addProductToCart(){
        this.cartService.addToCart(this.productData)
    }
}
