//make get request for show dates
const promise = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=anastasia"
);

promise
  .then((response) => {
    showTable(response.data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//processes show table objects and displays them in the show table section
function showTable(data) {
  //create static html for showtable section
  let showsSection = document.querySelector(".shows__section");

  let showTitle = document.createElement("div");
  showTitle.classList.add("shows__title");
  showsSection.appendChild(showTitle);

  let header = "shows";
  let headerTag = document.createElement("h2");
  headerTag.textContent = header;
  showTitle.appendChild(headerTag);

  let showTable = document.createElement("div");
  showTable.classList.add("shows__table");
  showsSection.appendChild(showTable);

  let paramTable = document.createElement("div");
  paramTable.classList.add("params");
  showTable.appendChild(paramTable);

  let param1 = "dates";
  let paramTag = document.createElement("h2");
  paramTag.textContent = param1;
  paramTable.appendChild(paramTag);

  let param2 = "venue";
  let paramTag2 = document.createElement("h2");
  paramTag2.textContent = param2;
  paramTable.appendChild(paramTag2);

  let param3 = "location";
  let paramTag3 = document.createElement("h2");
  paramTag3.textContent = param3;
  paramTable.appendChild(paramTag3);

  let showInfoWrapper = document.createElement("ul");
  showInfoWrapper.classList.add("show-info__wrapper");
  showTable.appendChild(showInfoWrapper);

  //loop through all of the show table objects and create new html elements
  for (i = 2; i < data.length; i++) {
    let showInfoLi = document.createElement("li");
    showInfoLi.classList.add("show-info__list");
    showInfoWrapper.appendChild(showInfoLi);

    let showInfoDate = document.createElement("div");
    showInfoDate.classList.add("show-info__date");
    showInfoLi.appendChild(showInfoDate);

    let date = data[i].date;
    let dateTag = document.createElement("h2");
    dateTag.textContent = date;
    showInfoDate.appendChild(dateTag);

    let showInfoVenue = document.createElement("div");
    showInfoVenue.classList.add("show-info__venue");
    showInfoLi.appendChild(showInfoVenue);

    let venue = data[i].place;
    let venueTag = document.createElement("h2");
    venueTag.textContent = venue;
    showInfoVenue.appendChild(venueTag);

    let showInfoLocation = document.createElement("div");
    showInfoLocation.classList.add("show-info__location");
    showInfoLi.appendChild(showInfoLocation);

    let location = data[i].location;
    let locationTag = document.createElement("h2");
    locationTag.textContent = location;
    showInfoLocation.appendChild(locationTag);

    let showInfoButton = document.createElement("div");
    showInfoButton.classList.add("show-info__button");
    showInfoLi.appendChild(showInfoButton);

    let buttonTag = document.createElement("button");
    buttonTag.classList.add("buy-btn");
    buttonTag.textContent = "buy tickets";
    showInfoButton.appendChild(buttonTag);
  }
}
