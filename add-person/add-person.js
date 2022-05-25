import { renderOption, renderClasses } from '../render-utils.js';
import { getWorkShops, createKid } from '../fetch-utils.js';


const classSelect = document.getElementById('workshops');
const more = document.getElementById('tellMe');
const kidform = document.getElementById('new-kid');

async function onLoad() {
    const workshops = await getWorkShops();
    console.log(workshops);
    for (let workshop of workshops) {
        const classOpt = renderOption(workshop);
        classSelect.append(classOpt);
        const classes = renderClasses(workshop);
        more.append(classes);
    }
}
onLoad();

kidform.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(kidform);
    await createKid({
        name: form.get('name'),
        contact: form.get('contact'),
        workshop_id: form.get('workshop_id'),
    });
    window.location.href = '/workshops';
});

