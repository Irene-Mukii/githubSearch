//search input variables
const userName = document.querySelector('#userName');


//result output variables
const results = document.querySelector('#results');
const userInfo = document.querySelector('.general-info');
const repos = document.querySelector('.repositories')

//on click fn (to display result field, save username to the variable allocated)

const search = document.addEventListener('click', ()=> {
    console.log(userName);
})

//function access and check github api.
import axios from '../node_modules/axios';