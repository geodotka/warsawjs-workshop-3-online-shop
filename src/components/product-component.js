// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <section class="product">
        <header class="product-header">{{ $ctrl.productData.title }}</header>
        <div class="product-img">
            <img src="{{ $ctrl.productData.image }}">
            <span>{{ $ctrl.productData.description }}</span>
        </div>
        <div class="product-footer">
            <button type="button">DO KOSZYKA</button>
            <input type=text>
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

    constructor(){
        console.log(this.productData)
    }

    $onInit(){
        // tu już jest this.productData i dopiero tu, bo w constructorze jeszcze nie ma
    }

}
