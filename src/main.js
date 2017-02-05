import angular from 'angular';
import loadModule from './modules/shop-module';
import ProductComponent from './components/product-component.js';
import PageHeaderComponent from './components/page-header.js';
import PageFooterComponent from './components/page-footer.js';
import CartComponent from './components/cart-component.js';
import ProductListComponent from './components/product-list-component.js';


let shop = loadModule();
shop.component('pageHeaderComponent', new PageHeaderComponent());
shop.component('productComponent', new ProductComponent()); // pierwszy parametr to jest string, ma być w formacie camelCase, w htmlu będzie to widoczne jako kebab-case
shop.component('pageFooterComponent', new PageFooterComponent());
shop.component('cartComponent', new CartComponent());
shop.component('productList', new ProductListComponent());


// uruchamiamy nasz moduł za pomocą funkcji bootstrap
angular.bootstrap(window.document, ['shop']);
