function showInput(type) {
    const inputContainer = document.getElementById(`${type}Input`);
    inputContainer.style.display = 'block';
}

function addVehicle() {
    const vehicleName = document.getElementById('vehicleName').value;
    if (vehicleName) {
        const vehiclesDiv = document.getElementById('vehicles');
        const newVehicle = document.createElement('div');
        newVehicle.classList.add('item');
        newVehicle.innerHTML = `${vehicleName} <button class="delete-button" onclick="deleteItem(this)">Delete</button>`;
        vehiclesDiv.appendChild(newVehicle);
        document.getElementById('vehicleName').value = '';
        document.getElementById('vehicleInput').style.display = 'none';
    }
}

function addDriver() {
    const driverName = document.getElementById('driverName').value;
    if (driverName) {
        const driversDiv = document.getElementById('drivers');
        const newDriver = document.createElement('div');
        newDriver.classList.add('item');
        newDriver.innerHTML = `${driverName} <button class="delete-button" onclick="deleteItem(this)">Delete</button>`;
        driversDiv.appendChild(newDriver);
        document.getElementById('driverName').value = '';
        document.getElementById('driverInput').style.display = 'none';
    }
}

function addRoute() {
    const routeName = document.getElementById('routeName').value;
    if (routeName) {
        const routesDiv = document.getElementById('routes');
        const newRoute = document.createElement('div');
        newRoute.classList.add('item');
        newRoute.innerHTML = `${routeName} <button class="delete-button" onclick="deleteItem(this)">Delete</button>`;
        routesDiv.appendChild(newRoute);
        document.getElementById('routeName').value = '';
        document.getElementById('routeInput').style.display = 'none';
    }
}

function scheduleTrip() {
    const tripName = document.getElementById('tripName').value;
    if (tripName) {
        const tripsDiv = document.getElementById('trips');
        const newTrip = document.createElement('div');
        newTrip.classList.add('item');
        newTrip.innerHTML = `${tripName} <button class="delete-button" onclick="deleteItem(this)">Delete</button>`;
        tripsDiv.appendChild(newTrip);
        document.getElementById('tripName').value = '';
        document.getElementById('tripInput').style.display = 'none';
    }
}

function deleteItem(button) {
    const item = button.parentElement;
    item.remove();
}
