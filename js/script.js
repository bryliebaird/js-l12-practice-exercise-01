const randomFolks = document.querySelector(".random-peeps");

const getUsers = async function(){
    const res = await fetch("https://randomuser.me/api?results=5");
    //console.log(res);
    const data = await res.json();
    //console.log(data);
    const userResults = data.results;
    //console.log(userResults);

    displayUsers(userResults);
}

getUsers();

const displayUsers = function(userResults){
    // let randomFolks = "";
    ///console.log(userResults);

    for(let user of userResults){
        let country = user.location.country;
        let name = user.name.first;
        let imageUrl = user.picture.medium;
        //console.log(country, name, imageUrl);
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
            `;
        randomFolks.append(userDiv);
        console.log(userDiv);
    }
}

