function getUser(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            var users = JSON.parse(xhr.responseText);
            var list = document.getElementById("list");

            list.innerHTML = '';
            Object.keys(users).map(function(key){
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                var edit = document.createElement('button');
                
                span.textContent = users[key];
                edit.addEventListener('click', function(){
                    var name = prompt('바꿀 이름을 입력하세요.');
                    if(!name){
                        return alert("이름은 반드시 입력하셔야 합니다.");
                    }

                    var xhr = new XMLHttpRequest();
                    xhr.onload = function(){
                        if(xhr.status == 200){
                            console.log(xhr.responseText);
                            getUser();
                        }else{
                            console.error(xhr.responseText);
                        }
                    };

                    xhr.open('PUT', '/users/'+key);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({name:name}));
                });

                var remove = document.createElement('button');
                remove.textContent = '삭제';
                remove.addEventListener('click', function(){
                    var xhr = XMLHttpRequest();
                    xhr.onload = function(){
                        if(xhr.status == 200){
                            console.log(xhr.responseText);
                            getUser();
                        }else{
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/users/'+key);
                    xhr.send();
                });
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
            });
        }else{
            console.error(xhr.responseText);
        }
        xhr.open('GET', '/users');
        xhr.send();
    }
}
window.onload = getUser; // 로딩시 getUser호출

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var name = e.target.username.value;
    if(!name){
        return alert('이름을 입력하세요.');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log(xhr.responseText);
            getUser();
        }else{
            console.error(xhr.responseText);
        }
    }
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify({name:name}));
    e.target.username.value='';
});