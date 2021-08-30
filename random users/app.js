const loadRandomUser = () => {
    fetch(`https://randomuser.me/api/?results=1`)
        .then(res => res.json())
        .then(data => userData(data.results))
}

loadRandomUser()

const userData = data => {
    console.log(data);

    const userDiv = document.getElementById('user')

    data.forEach(userData => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('col')
        newDiv.innerHTML = `
            <div class="card h-100">
                <img src="${userData.picture.large}" class="card-img-top rounded mx-auto d-block w-25 py-4" alt="...">
                <div class="card-body">
                <p id='short-title' class="card-text text-center fw-normal">Hi, My name is</p>
                    <h5 id="title" class="card-title text-center">${userData.name.title} ${userData.name.first} ${userData.name.last} </h5>
                   
                </div>
                <div class="card-footer text-center d-flex gap-4 align-center justify-content-center">
                <div onmouseover="icons('${userData.name.title} ${userData.name.first} ${userData.name.last}','${"name"}')"  id="user"><i class="far fa-user fs-5 "></i></div>
                <div onmouseover="icons('${userData.location.country}', '${'Location'}')" id="user"><i class="fas fa-street-view fs-5"></i></div>
                <div onmouseover="icons('${userData.email}', '${"Email"}')" id="user"><i class="far fa-envelope-open fs-5"></i></div>
                <div onmouseover="icons('${userData.registered.age}', '${"Age"}')" id="user"><i class="fas fa-calendar-week fs-5"></i></div>
                <div onmouseover="icons('${userData.login.password}', '${"Password"}')" id="user"><i class="fas fa-lock fs-5"></i></div>
                </div>        
                <button id="btn" onclick="loadRandomUser()" type="button" class="btn btn-dark">New user</button>       
            </div>
        `;
        userDiv.appendChild(newDiv);

        const button = document.getElementById('btn')
        button.addEventListener('click', () => {
            newDiv.remove();
        })

    })
}



const icons = (data, item) => {
    document.getElementById('short-title').innerText = `My ${item} is`
    document.getElementById('title').innerText = data;
}