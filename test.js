var Tname = document.getElementById('name');
var img = document.getElementById('img');
var btn = document.getElementById('btn');
btn.addEventListener('click',function(event){
    location.reload();
})
fetch('https://randomuser.me/api')
.then(res => res.json())
.then(data => {
    const user = data.results[0];
    const username = user.name;
    // console.log(username.first);
    const url = user.picture.large;
    Tname.innerText = username.first;
    img.src= url;
})