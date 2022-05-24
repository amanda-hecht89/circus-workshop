import { getWorkShops, checkAuth, logout, deleteKid } from '../fetch-utils.js';
import { renderClasses } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent = ' ';
    const data = await getWorkShops();
    for (let classes of data) {
        const circusEl = renderClasses(classes);

        const ul = document.createElement('ul');
        for (let participant of classes.participant) {
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact}`;
            li.addEventListener('click', async () => {
                await deleteKid(participant.id);
                await displayWorkshops();
            });
            ul.append(li);
        }
        circusEl.append(ul);
        main.append(circusEl);

    }
}
displayWorkshops();