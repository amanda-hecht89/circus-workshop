import { renderOption } from '../render-utils.js';
import { getWorkShops, createKid } from '../fetch-utils.js';


const classSelect = document.getElementById('classes');
const kidform = document.getElementById('new-kid');

async function onLoad() {
    const workshops = await getWorkShops();
    for (let workshop of workshops) {
        const classOpt = renderOption(workshop);
        classSelect.append(classOpt);
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

