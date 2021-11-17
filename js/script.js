const randomFolks = document.querySelector(".random-peeps");
const selectUserNum = document.querySelector(".num-users");

const getUsers = async function(numUsers){
    const res = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    //console.log(res);
    const data = await res.json();
    //console.log(data);

    const userResults = data.results;
    displayUsers(userResults);
}


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

selectUserNum.classList.remove("hide");

selectUserNum.addEventListener("change", function(e){
    let numUsers = e.target.value;
    console.log(numUsers);
    getUsers(numUsers);
})

