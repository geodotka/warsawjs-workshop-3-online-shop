// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
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
