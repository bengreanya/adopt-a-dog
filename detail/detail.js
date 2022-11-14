import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// eslint-disable-next-line space-before-function-paren
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const dog = await getDog(id);
    const dogDetailEl = renderDogDetail(dog);
    dogDetailContainer.append(dogDetailEl);
});
