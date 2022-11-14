import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// eslint-disable-next-line space-before-function-paren
window.addEventListener('load', async () => {
    const dogs = await getDogs();
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
});
