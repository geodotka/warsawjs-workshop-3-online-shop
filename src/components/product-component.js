// templatestring - dynamiczne stringi, mogą zawierać w sobie jakieś zmienne w formacie: ${name}
const TEMPLATE = `
    <section>
        <header>Tytuł</header>
        <div>
            <img>
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
