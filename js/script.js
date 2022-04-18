const inputIn = document.querySelector('.form-control');
const btn1 = document.querySelector('#button-addon2');

btn1.onclick = () => {
    console.log(inputIn.value);
    inputIn.value = '';
}

