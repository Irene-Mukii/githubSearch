//search input variables
const userName = document.querySelector('#userName');
const searchBtn = document.querySelector('.srch-btn');


//result output variables
const results = document.querySelector('#results');
const userInfo = document.querySelector('.user');
const followers = document.querySelector('.followers');
const image = document.querySelector('.avatar');
const following = document.querySelector('.following');
const repos = document.querySelector('.repositories');
const numOfRepos = document.querySelector('.num-of-repos');
const description = document.querySelector('.description');
const repoName = document.querySelector('.repo-name');
//on click fn (to display result field, save username to the variable allocated)

searchBtn.addEventListener('click', ()=> {
    let user = userName.value;
    console.log(user);
    apiUserInfoSrch(user);
})



import axios from '../node_modules/axios';

async function apiUserInfoSrch(user) {
    try{
    await axios 
        .get(`https://api.github.com/users/${user}`)
        .then(response=> {
            //console.log(response.data);
             image.src=response.data.avatar_url; 
             userInfo.innerHTML = response.data.login;
             followers.innerHTML = response.data.followers;
             following.innerHTML = response.data.following;
             numOfRepos.innerHTML = response.data.public_repos;

             //displaying repos
            let reposUrl = response.data.repos_url;
            console.log(reposUrl)
            apiUserRepoSrch(reposUrl);
        })
    
    }catch(error){
        console.log('Something is wrong')
    }
    
}

async function apiUserRepoSrch (reposUrl){
    try{
    await axios 
        .get(reposUrl)
        .then(response=> {
            //display repos using a loop
            console.log(response.data);
            for(let i in  response.data){  //try make it such that each print wont be deleted...we want all 29

                let tag1 = document.createElement("p");
                let text1 = document.createTextNode(`Name: ${response.data[i].name}`);
                tag1.appendChild(text1);
                
                repos.appendChild(tag1);

                let tag = document.createElement("p");
                let text = document.createTextNode(`Description: ${response.data[i].description}`);
                tag.appendChild(text);
                
                repos.appendChild(tag);

                let tag2 = document.createElement('p');
                let text2 = document.createTextNode('============================');
                tag2.appendChild(text2);

                repos.appendChild(tag2);
                // repoName.innerHTML = response.data[i].name;
            };
            
        })
    }catch(error){
        console.log('Something is wrong');
    }
}