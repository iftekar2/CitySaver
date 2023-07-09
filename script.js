const submitButton = document.getElementById("button");

submitButton.addEventListener("click", showUserInfo);

function showUserInfo() {
  // Get user input values
  const destination = document.getElementById("destination").value;
  const city = document.getElementById("city").value;
  const image = document.getElementById("image").value;
  const description = document.getElementById("description").value;

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
    </div>
  </section>`;
  // Create a new container element
  const newContainer = document.createElement("div");
  newContainer.innerHTML = newShow;

  // Append the new container element to the existing content
  show.appendChild(newContainer);
}
