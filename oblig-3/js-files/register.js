console.log('linked register')

//array for storing the data from the form 
const people = [];

//getting the button to also do this function as well, besides the onclick which is for validation
document.querySelector('button').addEventListener('click', e => {
    //to only add one user at a time
    document.querySelector('ul.users').innerHTML = ' ';
    //creates values in a variable based on the "Profile" class with the values from the form
    const person = new Profile(e.target.form.uName.value,
        e.target.form.age.value,
        e.target.form.tlf.value,
        e.target.form.email.value);
    //if the idx has no value, "push" the data to the array
    if (e.target.form.idx.value == "") {
        people.push(person);
    }
    else {
        people[e.target.form.idx.value * 1] = person;
        e.target.form.idx.value = ""
    }
    addPerson();
    clearForm();
});
console.log(people);

function addPerson() {
    //new variable which parses 
    var users = JSON.parse(localStorage.getItem('users') || "[]")
    //the it makes a variable of the list to display the data and creates li elements to fill it 
    const list = document.querySelector('ul.users');
    people.forEach((person, idx) => {
        const li = document.createElement('LI');
        li.innerHTML = person;
        li.setAttribute('data-idx', idx);
        list.appendChild(li);
        console.log('contact added');
    })
    //setts the array to be in local storage
    localStorage.setItem('people', people);
    console.log(localStorage.people);
}
//clears the for so that a new user can be entered
function clearForm() {
    const form = document.querySelector('form');
    form.idx.value = "";
    form.uName.value = "";
    form.age.value = "";
    form.tlf.value = "";
    form.email.value = "";
}
