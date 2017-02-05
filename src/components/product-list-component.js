
const TEMPLATE = `
    <div class="component-list">
        <product-component></product-component>
        <product-component></product-component>
        <product-component></product-component>
        <product-component></product-component>
    </div>
`;


export default class ProductListComponent {
    constructor(){
        this.controller = ProductListController;
    }

    template(){
        return TEMPLATE;
    }

}

class ProductListController {

    constructor(productsService){
        productsService.fetchProducts()
    }

}
