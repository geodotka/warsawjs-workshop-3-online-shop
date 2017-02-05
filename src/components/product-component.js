// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <section class="product">
        <header class="product-header">Tytuł</header>
        <div class="product-img">
            <img src="../images/madryt.jpg">
            <span>To jest opis</span>
        </div>
        <div class="product-footer">
            <button type="button">DO KOSZYKA</button>
            <input type=text>
        </div>
    </section>
`;


export default class ProductComponent {
    constructor(){
        console.log('BBBBB')
    }

    template(){
        return TEMPLATE;
    }

}
