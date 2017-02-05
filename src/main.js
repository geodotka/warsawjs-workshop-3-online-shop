import angular from 'angular';
import loadModule from './modules/shop-module';
import ProductComponent from './components/product-component.js';


let shop = loadModule();
shop.component('productComponent', new ProductComponent()); // pierwszy parametr to jest string, ma być w formacie camelCase, w htmlu będzie to widoczne jako kebab-case


// uruchamiamy nasz moduł za pomocą funkcji bootstrap
angular.bootstrap(window.document, ['shop']);
