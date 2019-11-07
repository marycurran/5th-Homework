//HMLHttpRequest Method
let xhr=new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users');
xhr.responseType='text';
xhr.send();
xhr.onload=function(){
    let responseObj=xhr.response;
    let obj=JSON.parse(responseObj);
    let x='';
    for(let i=0; i<obj.length;i++){
        x=x+obj[i].email+'<br>';
        document.getElementById('email').innerHTML=x;
    }
}

xhr.onerror=function(){
    alert('Network Error');
}

//Fetch Method to get users names
fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        function(response){
            if (response.status !==200){
                console.log('Error'+response.status);
                return
            }
            response.json().then(function(data){
                let m='';
                for(let t=0;t<data.length; t++){
                    m=m+data[t].username+'<br>';
                    document.getElementById('users').innerHTML=m;
                }
            })
        }
    )
    .catch(function(err){
        console.log('Error',err);
    })
