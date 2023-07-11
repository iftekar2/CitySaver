const submitButton = document.getElementById("button");
submitButton.addEventListener("click", showUserInfo);

function showUserInfo(event) {
  //This is preventing default
  event.preventDefault();

  //This is getting value for destination, city, image, description.
  const destination = document.getElementById("destination").value;
  const city = document.getElementById("city").value;
  const image = document.getElementById("image").value;
  const description = document.getElementById("description").value;

  //This makes sure that the user enteres something in destination, city, image, description.
  //If they don't fill in all the boxes it would be submitted.
  if (!destination || !city || !image || !description) {
    return;
  }

  //In here I am passing destination, city, image, description to showInfo Function.
  showInfo(destination, city, image, description);
}

function showInfo(destination, city, image, description) {
  const showUserInputs = document.getElementById("showUserInputs");

  //This is creating showUseInputSection every time the user clicks on Submit Button
  const newShowUserInputs = `
    <section class="showUserInputSection">
      <div class="showUserInput">
        <div class="destination">
          <h3>Destination Name</h3>
          <p id="destinationInput">${destination}</p>
        </div>
  
        <div class="city">
          <h3>City Name</h3>
          <p id="cityInput">${city}</p>
        </div>
  
        <div class="image">
          <h3>Image</h3>
          <div class="imageDiv">
            <img id="imageInput" src="${image}"></img>
          </div>
        </div>
  
        <div class="description">
          <h3>City Description</h3>
          <p id="descriptionInput">${description}</p>
        </div>
        <div class="removeButtonDiv">
          <button class="removeButton" id="removeButton">Remove</button>
        </div>
      </div>
    </section>
  `;

  //This allows us to create more than one User Input Section.
  const newContainer = document.createElement("div");
  newContainer.innerHTML = newShowUserInputs;

  showUserInputs.appendChild(newContainer);

  //This is Removing the Sections the user is creating.
  const removeSection = newContainer.querySelector(".removeButton");
  removeSection.addEventListener("click", () => {
    newContainer.remove();
  });
}
