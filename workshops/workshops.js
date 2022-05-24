import { getWorkShops } from '../fetch-utils.js';
import { renderClasses} from '../render-utils.js';

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent.content = ' ';
    const data = await getWorkShops();
    for (let classes of data) {
        const circusEl = renderClasses(classes);


    }
}