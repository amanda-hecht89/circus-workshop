export function renderClasses(circus_classes) {
    const div = document.createElement('div');
    div.classList.add('classes');
    const h2 = document.createElement('h2');
    h2.textContent = workshop.name;

    div.append(h2);

    return div;
}

export function renderOption(classes) {
    const option = document.createElement('option');
    option.value = classes.id;
    option.textContent = classes.name;
    return option;

}