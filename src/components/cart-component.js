// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <div class="cart">
        Koszyk
    </div>
`;


export default class CartComponent {
    constructor(){
    }

    template(){
        return TEMPLATE;
    }

}
