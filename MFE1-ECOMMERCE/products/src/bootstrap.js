import faker from 'faker';


//CONFIGURACION INICIAL sin el mount, que hace que no se dependa de la existencia de un div con un id especifico
// let products = '';

// for (let i = 0; i < 5 ; i++){
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`;
// }

// document.querySelector("#dev-products").innerHTML = products;

//CONFIGURACION CON MOUNT

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5 ; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    el.innerHTML = products;
}

//CONTEXTO 1
//Se ejecuta este proyecto en local y estamos seguros que existe un id de-products
if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-products");

    if(el){
        mount(el);
    }
}


//CONTEXTO 2
//Se ejecuta el archivo en produccion donde no se esta seguro si en el contenedor existe el id dev-products
export { mount }