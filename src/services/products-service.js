// nie importujemy HTTPService, tylko dodajemy jako zależność

export default class ProductsService {

    constructor(httpService){
        this.url = 'http://127.0.0.1:3000/';
        this.httpService = httpService;
    }

    fetchProducts(){
        return this.httpService.$get(this.url + 'products')
    }

}
