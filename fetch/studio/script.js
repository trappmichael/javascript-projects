//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const divAstronauts = document.getElementById("container");
            
            function findObjectWithMinValue(objectArray, keyToSearch) {
                let objectWithMinValue = objectArray[0];
                for (let i = 0; i < objectArray.length; i++){
                  if (objectArray[i][keyToSearch] < objectWithMinValue[keyToSearch]){
                    objectWithMinValue = objectArray[i];
                  };
                };
                return objectWithMinValue;
            };

            function sortObjArrayLowToHigh(objectArray, keyToSearch) {
                let sortedJson = [];
                while (objectArray.length > 0) {
                    sortedJson.push(findObjectWithMinValue(objectArray, keyToSearch));
                    objectArray.splice(objectArray.indexOf(findObjectWithMinValue(objectArray, keyToSearch)),1);
                }
                return sortedJson;
            };

            let jsonOrdered = sortObjArrayLowToHigh(json, "hoursInSpace");

            for (let i = 0; i < jsonOrdered.length; i++) {
                divAstronauts.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${jsonOrdered[i].firstName} ${jsonOrdered[i].lastName}</h3>
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