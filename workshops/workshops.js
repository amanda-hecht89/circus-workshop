import { getWorkShops } from '../fetch-utils.js';
import { renderClasses } from '../render-utils.js';
import { getWorkShops, checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent.content = ' ';
    const data = await getWorkShops();
    for (let classes of data) {
        const circusEl = renderClasses(classes);

        const ul = document.createElement('ul');
        for (let participant of classes.participants) {
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact}`;
            li.addEventListener('click', async () =>
            {
                await displayWorkshops();
            });
            ul.append(li);
        }
        circusEl.append(ul);
        main.append(circusEl);

    }
}
displayWorkshops();