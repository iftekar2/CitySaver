const submitButton = document.getElementById("button");
submitButton.addEventListener("click", showUserInfo);

function showUserInfo(event) {
  event.preventDefault();
  const destination = document.getElementById("destination").value;
  const city = document.getElementById("city").value;
  const image = document.getElementById("image").value;
  const description = document.getElementById("description").value;

  if (!destination || !city || !image || !description) {
    return;
  }

  showInfo(destination, city, image, description);
}

function showInfo(destination, city, image, description) {
  const show = document.getElementById("show");
  const newShow = `
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

  const newContainer = document.createElement("div");
  newContainer.innerHTML = newShow;

  show.appendChild(newContainer);

  const removeSection = newContainer.querySelector(".removeButton");
  removeSection.addEventListener("click", () => {
    newContainer.remove();
  });
}
