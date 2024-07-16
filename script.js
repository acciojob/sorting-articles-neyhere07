//your JS code here. If required.

const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];
function replaced(article) {
    return article.replace(/^(a |an |the )/i,'').trim();
}
const sortedBands = bands.sort((a, b) => replaced(a).localeCompare(replaced(b)));
const ul = document.getElementById('bands');
sortedBands.forEach(sortBand => {
    const li=`<li>${sortBand}</li>`;
	ul.innerHTML+=li;
});
