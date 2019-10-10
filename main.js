window.addEventListener('DOMContentLoaded', (e) => {

    const API = "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=22&format=json";
  
  
    // API Call to get players
    function getPlayers() {
        axios.get(`${API}`)
        .then(function(response) {
            // console.log(response.data);
          grabRandomPlayer(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    };
  
    getPlayers();
  
  
    function grabRandomPlayer(data) {
      let playerInfo = document.getElementById('playerInfo');
       
      // Returns a random object
      let randomPlayer = data.players[Math.floor(Math.random()*data.players.length)];

      while (playerInfo.firstChild) {
        playerInfo.removeChild(playerInfo.firstChild);
      };

      // Creates new section to display player info
      let newPlayer = document.createElement('div');
      let name = document.createElement('h4');
      let position = document.createElement('h4');
      let seasonPts = document.createElement('h4');
      let team = document.createElement('h4');
      
      // Append data to new section
      playerInfo.appendChild(newPlayer);
      newPlayer.appendChild(name);
      newPlayer.appendChild(position);
      newPlayer.appendChild(seasonPts);
      newPlayer.appendChild(team);

      // Create class to display HTML text
      newPlayer.classList.add('playerCard')
      name.innerHTML = randomPlayer.name;
      name.classList.add('playerName');
      position.innerHTML = `Position: ${randomPlayer.position}`;
      seasonPts.innerHTML = `Season Points: ${Math.round(randomPlayer.seasonPts)} pts`;
      team.innerHTML = `Team: ${randomPlayer.teamAbbr}`;
  
      console.log(`randomPlayer>>`, randomPlayer);
    };

     // Grab button 
     let btn = document.getElementById('randomize');
      
     // Event listener to toggle playerInfo section 
     btn.addEventListener('click', () => {
         getPlayers();
     });
  });