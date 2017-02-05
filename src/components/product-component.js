// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <section class="product">
        <header>Tytuł</header>
        <div>
            <img src="../images/madryt.html">
            <span></span>
        </div>
        <div>
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
