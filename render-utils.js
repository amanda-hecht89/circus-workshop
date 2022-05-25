export function renderClasses(classes) {
    const div = document.createElement('div');
    div.classList.add('classes');

    const h2 = document.createElement('h2');
    h2.textContent = classes.name;

    const image = document.createElement('img');
    image.classList.add('scary');
    image.src = classes.image;

    const div2 = document.createElement('div2');
    div2.textContent = classes.description;
    div2.classList.add('para');

    div.append(h2, image, div2);

    return div;
}

export function renderOption(classes) {
    const option = document.createElement('option');
    option.value = classes.id;
    option.textContent = classes.name;
    return option;

}