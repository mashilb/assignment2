let container = document.getElementById('container');
let editButton = document.getElementById('editButton');
let form = document.getElementById('form');
editButton.addEventListener('click', () => {
    container.classList.toggle('edit');
    form.classList.toggle('active');
    editButton.classList.toggle('on');

    if (editButton.classList.contains('on')) {
        editButton.innerHTML="Back";
    } else {
        editButton.innerHTML="edit";
    }
})


let nameInput = document.getElementById('nameInput');
let nameTarget = document.getElementById('nameTarget');
let nameSave = document.getElementById('nameSave');
nameSave.addEventListener('click', () => {
    nameTarget.innerHTML = nameInput.value;
})


let roleInput = document.getElementById('roleInput');
let roleTarget = document.getElementById('roleTarget');
let roleSave = document.getElementById('roleSave');
roleSave.addEventListener('click', () => {
    roleTarget.innerHTML = roleInput.value;
})


let avaibilityInput = document.getElementById('avaibilityInput');
let avaibilityTarget = document.getElementById('avaibilityTarget');
let avaibilitySave = document.getElementById('avaibilitySave');
avaibilitySave.addEventListener('click', () => {
    avaibilityTarget.innerHTML = avaibilityInput.value;
})


let ageInput = document.getElementById('ageInput');
let ageTarget = document.getElementById('ageTarget');
let ageSave = document.getElementById('ageSave');
ageSave.addEventListener('click', () => {
    ageTarget.innerHTML = ageInput.value;
})


let lokasiInput = document.getElementById('lokasiInput');
let lokasiTarget = document.getElementById('lokasiTarget');
let lokasiSave = document.getElementById('lokasiSave');
lokasiSave.addEventListener('click', () => {
    lokasiTarget.innerHTML = lokasiInput.value;
})


let expInput = document.getElementById('expInput');
let expTarget = document.getElementById('expTarget');
let expSave = document.getElementById('expSave');
expSave.addEventListener('click', () => {
    expTarget.innerHTML = expInput.value;
})

