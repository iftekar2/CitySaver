const submitButton = document.getElementById("button");

submitButton.addEventListener("click", showUserInfo);

function showUserInfo() {
  //This is getting the User Information
  const destination = document.getElementById("destination").value;
  const city = document.getElementById("city").value;
  const image = document.getElementById("image").value;
  const description = document.getElementById("description").value;

  const destinationInput = document.getElementById("destinationInput");
  destinationInput.innerHTML = destination;

  const cityInput = document.getElementById("cityInput");
  cityInput.innerHTML = city;

  const imageInput = document.getElementById("imageInput");
  imageInput.src = image;

  const descriptionInput = document.getElementById("descriptionInput");
  descriptionInput.innerHTML = description;
}
