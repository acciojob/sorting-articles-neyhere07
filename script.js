//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function strip(article) {
    const wordsToIgnore = ['a', 'an', 'the'];
    const words = article.split(' ');

    if (wordsToIgnore.includes(words[0].toLowerCase())) {
        return words.slice(1).join(' ');
    }
    return article;
}

const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

const ul = document.getElementById('band');

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});