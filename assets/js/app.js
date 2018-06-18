const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
const newresponseContainer = document.getElementById("newresponse-container"); 

let searchedForText;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  newresponseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();

});

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=b10c972fab1d4c2c868885bccff932e6`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
  
  function handleError () {
    console.log('Se ha presentado un error');
  }

  /*
  function addNews() {
    const data = JSON.parse(this.responseText);
    console.log(data);
  }


function addNews() {
  const data = JSON.parse(this.responseText);
  const response = data.response;
  console.log(response);
}
*/

function addNews() {
    const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;
    
   

  let li  = document.createElement('li');
  li.className = 'articleClass';
  li.innerText = snippet;
  responseContainer.appendChild(li);



  let newsearchforText= document.createTextNode(comments);
 


  
}


}

