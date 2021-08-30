const error = document.getElementById('error').style.display = 'none'

document.getElementById('button-addon2').addEventListener('click', function search() {
    const searchValue = document.getElementById('search-input').value
    // console.log(searchValue);
    if (searchValue == '') {
        document.getElementById('error').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'none'
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`)
            .then(res => res.json())
            .then(data => displayTeams(data.teams))

    }



});

const displayTeams = teamsData => {
    const teamDiv = document.getElementById('teams')
    // console.log(teamsData);

    teamsData.forEach(teamdata => {
        // console.log(teamdata);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
              <img style='width:200px' src="${teamdata.strTeamBadge}" class="card-img-top mx-auto d-block py-2" alt="...">
              <div class="card-body">
                 <h5 class="card-title text-center">${teamdata.strAlternate}</h5>
                  <p class="card-text">${teamdata.strDescriptionEN.slice(0, 200)}</p>
                  <button onclick='loadSingleTeam(${teamdata.idTeam})'>Details</button>
             </div>
        </div>
        `;
        teamDiv.appendChild(div);

    });

}

const loadSingleTeam = (teamId) => {

    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => displaySingleTeam(data.teams[0]))

}

const displaySingleTeam = team => {
    console.log(team);
    const teamDiv = document.getElementById('team')
    const div = document.createElement('div')
    teamDiv.textContent = '';
    div.classList.add('col')
    div.innerHTML = `
        <div class="card h-100">
                <img style='width:200px' src="${team.strTeamBadge}" class="card-img-top mx-auto d-block py-2" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${team.strAlternate}</h5>

                <table class="table">       
                <tbody>
                  <tr>
                    <th scope="row">Formed Year</th>
                    <td>${team.intFormedYear}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Country</th>
                    <td>${team.strCountry}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">LEague</th>
                    <td>${team.strLeague}</td>           
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    `;

    teamDiv.appendChild(div);
}