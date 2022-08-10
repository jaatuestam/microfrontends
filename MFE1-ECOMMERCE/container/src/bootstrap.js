import { mount as productMount} from 'productsApp/ProductsIndex';
import { mount as cartMount } from 'cartApp/CartShow';

console.log("container");

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));