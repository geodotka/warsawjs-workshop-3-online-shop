import angular from 'angular';
import loadModule from './modules/shop-module';
import ProductComponent from './components/product-component.js';
import PageHeaderComponent from './components/page-header.js';
import PageFooterComponent from './components/page-footer.js';


let shop = loadModule();
shop.component('pageHeaderComponent', new PageHeaderComponent());
shop.component('productComponent', new ProductComponent()); // pierwszy parametr to jest string, ma być w formacie camelCase, w htmlu będzie to widoczne jako kebab-case
shop.component('pageFooterComponent', new PageFooterComponent());


// uruchamiamy nasz moduł za pomocą funkcji bootstrap
angular.bootstrap(window.document, ['shop']);
