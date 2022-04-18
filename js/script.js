const inputIn = document.querySelector('.form-control');
const pushbtn = document.querySelector('#button-addon2');

pushbtn.onclick = () => {
    console.log(inputIn.value);
    inputIn.value = '';
}

const form = document.querySelector('form');
const chb1 = document.querySelector('#in1');
const chb2 = document.querySelector('#in2');
const chb3 = document.querySelector('#in3');
const chb4 = document.querySelector('#in4');
const chb5 = document.querySelector('#in5');
const savebtn = document.querySelector('.btn-1');

savebtn.onclick = () => {
    console.log(form.elements[0].value)
    if (chb1.checked) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
    console.log(form.elements[1].value)
    if (chb2.checked) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }

    console.log(form.elements[2].value)
    if (chb3.checked) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
    console.log(form.elements[3].value)
    if (chb4.checked) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
    console.log(form.elements[4].value)
    if (chb5.checked) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }

}

const deletebtn = document.querySelector('.btn-2');

deletebtn.onclick = () => {
    form.elements[0].checked = false;
    form.elements[1].checked = false;
    form.elements[2].checked = false;
    form.elements[3].checked = false;
    form.elements[4].checked = false;
}