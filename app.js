const button = document.getElementById('btn');
const suggestion = document.getElementById('activity');
button.addEventListener('click', fetchData);

function fetchData() {
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        suggestion.innerHTML = `${data.activity}`;
        
    })
};

fetchData();
