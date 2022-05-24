import { getWorkShops } from '../fetch-utils.js';

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent.content = ' ';
    const data = await getWorkShops();
    for (let circus_classes of data) {
        const circusEl = renderClasses(circus_classes);


    }
}