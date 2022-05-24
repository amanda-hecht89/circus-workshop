import { renderOption } from '../render-utils.js';
import { getWorkShops } from '../fetch-utils.js';


const classSelect = document.getElementById('classes');
const kidform = document.getElementById('new-kid')

async onLoad() {
    const workshops = await getWorkShops();
    for (let workshop of workshops) {
        const classOpt = renderOption(workshop);
        classSelect.append(classOpt);
    }
}
onLoad();

