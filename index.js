function addingEventListener() {

     // Getting the Button element
    const input = document.getElementById('button');

    // Adding the Event Listener and passing 2 Arguments
    input.addEventListener('click', clickAlert); 
}

// The funtion that  executes when the User Clicks
function clickAlert() {
  alert('I was clicked!');
}

