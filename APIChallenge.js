const baseURL = 'https://api.spacexdata.com/v3/ships';

const searchForm = document.querySelector('form');
const spaceXShips = document.querySelector('table');

function fetchSpaceXShips(event) {
    event.preventDefault();

    fetch(baseURL)
        .then(result => {
            return result.json();
        })
        .then(json => {
            console.log(json);
            displayShips(json);
        })
        .catch(err => {
            console.error(err);
        })

    console.log('Check Check Check');
}

function displayShips(json) {
        let ships = json.forEach(ship => {
        let shipRow = document.createElement('tr');
        let shipName = document.createElement('td');
        let shipType = document.createElement('td');
        let shipYearBuilt = document.createElement('td');
        let shipRole = document.createElement('td');

        shipName.innerText = ship.ship_name;
        shipType.innerText = ship.ship_type;
        shipYearBuilt.innerText = ship.year_built;
        shipRole.innerText = ship.roles;

        shipRow.appendChild(shipName);
        shipRow.appendChild(shipType);
        shipRow.appendChild(shipYearBuilt);
        shipRow.appendChild(shipRole);
        spaceXShips.appendChild(shipRow);
    })
}

searchForm.addEventListener('submit', fetchSpaceXShips);