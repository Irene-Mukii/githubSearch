//search input variables
const userName = document.querySelector('#userName');
const searchBtn = document.querySelector('.srch-btn')


//result output variables
const results = document.querySelector('#results');
const userInfo = document.querySelector('.user');
const followers = document.querySelector('.followers')
const repos = document.querySelector('.repositories')

//on click fn (to display result field, save username to the variable allocated)

searchBtn.addEventListener('click', ()=> {
    let user = userName.value;
    console.log(user);
    //apiSrch(userName);
    userInfo.innerHTML = 'Irene-Mukii';
    followers.innerHTML = '3';

})

//function access and check github api.
//import axios from '../node_modules/axios';

async function apiSrch(userName) {

}