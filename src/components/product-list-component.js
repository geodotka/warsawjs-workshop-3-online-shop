
const TEMPLATE = `
    <div class="component-list">
        <product-component ng-repeat="product in $ctrl.products" product-data="product"></product-component>
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
        productsService.fetchProducts().then(response=> {
            this.products = response.data;
        })
    }

    $onInit(){  // funkcja jest angularowa, zaczyna się od $
        this.products = []
    }

}
