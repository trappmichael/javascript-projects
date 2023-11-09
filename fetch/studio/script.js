//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const divAstronauts = document.getElementById("container");
            
            function findMinHoursInSpace(astronautArray) {
                let minAstronaut = astronautArray[0];
                for (i = 0; i < astronautArray.length; i++){
                  if (astronautArray[i].hoursInSpace < minAstronaut.hoursInSpace){
                    minAstronaut = astronautArray[i];
                  };
                };
                return minAstronaut;
            };

            function sortJson(astronautArray) {
                let sortedAstronautArray = [];
                while (astronautArray.length > 0) {
                    sortedAstronautArray.push(findMinHoursInSpace(astronautArray));
                    astronautArray.splice(astronautArray.indexOf(findMinHoursInSpace(astronautArray)),1);
                }
                return sortedAstronautArray;
            };

            let jsonOrdered = sortJson(Json);

            for (let i = 0; i < jsonOrdered.length; i++) {
                divAstronauts.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${jsonOrdered[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${jsonOrdered[i].hoursInSpace}</li>
                                <li>Active: ${jsonOrdered[i].active}</li>
                                <li>Skills: ${jsonOrdered[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${jsonOrdered[i].picture}>
                    </div>
                `
            };
        })
    })
})