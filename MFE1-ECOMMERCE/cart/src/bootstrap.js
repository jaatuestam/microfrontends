import faker from 'faker';

//CONFIGURACION INICIAL sin el mount, que hace que no se dependa de la existencia de un div con un id especifico

// const cart = `<div>Tienes ${faker.random.number()} articulos en el carrito de compras</div>`;

// document.querySelector("#dev-cart").innerHTML = cart;

const mount = (el) => {

    const cart = `<div>Tienes ${faker.random.number()} articulos en el carrito de compras</div>`;

    el.innerHTML = cart;

}

//CONTEXTO 1
//Se ejecuta este proyecto en local y estamos seguros que existe un id de-products
if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-cart");

    if(el){
        mount(el);
    }
}


//CONTEXTO 2
//Se ejecuta el archivo en produccion donde no se esta seguro si en el contenedor existe el id dev-products
export { mount }