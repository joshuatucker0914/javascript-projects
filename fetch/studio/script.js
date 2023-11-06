//TODO: Add Your Code Below
window.addEventListener('load', function () {
    // Make a GET request using fetch to the astronauts API
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById('container');
        
        // Clear the container to avoid duplicates
        container.innerHTML = '';
  
        // Add each astronaut returned to the web page
        data.forEach((astronaut) => {
          // Create a div element with the "astronaut" class
          const astronautDiv = document.createElement('div');
          astronautDiv.className = 'astronaut';
  
          // Create a div for astronaut details
          const detailsDiv = document.createElement('div');
          detailsDiv.className = 'details';
  
          // Populate astronaut details
          detailsDiv.innerHTML = `
            <h2>${astronaut.firstName} ${astronaut.lastName}</h2>
            <p>${astronaut.hoursInSpace} hours in space</p>
            <p>Active: ${astronaut.active ? 'Yes' : 'No'}</p>
            <p>Skills: ${astronaut.skills.join(', ')}</p>
          `;
  
          // Create an image element for the avatar
          const avatarImg = document.createElement('img');
          avatarImg.className = 'avatar';
          avatarImg.src = astronaut.picture;
  
          // Append elements to the astronaut div, text on the left and image on the right
          astronautDiv.appendChild(detailsDiv);
          astronautDiv.appendChild(avatarImg);
          
          // Append the astronaut div to the container
          container.appendChild(astronautDiv);
        });
      })
      .catch((error) => {
        console.error('Error fetching astronaut data:', error);
      });
  });