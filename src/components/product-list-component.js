const TEMPLATE = `
    <div class="component-list">
        <product-component></product-component>
        <product-component></product-component>
        <product-component></product-component>
        <product-component></product-component>
    </div>
`;


export default class ProductListComponent {
    constructor(){}

    template(){
        return TEMPLATE;
    }

}
