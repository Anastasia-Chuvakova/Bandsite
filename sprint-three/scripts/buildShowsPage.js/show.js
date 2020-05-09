// var concerts = [

//   {
//     id: 1,
//     header: "Shows",
//   },
//   {
//     id: 2,
//     param1: "dates",
//     param2: "venue",
//     param3: "location",
//   },

//   {
//     id: 3,

//     date: " Mon Dec 17 2018",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//     button: "buy tickets",
//   },
//   {
//     id: 4,
//     date: " Tue Jul 18 2018",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//     button: "buy tickets",
//   },
//   {
//     id: 5,
//     date: "  Fri Jul 22 2019",
//     venue: "View Loungue",
//     location: "San Francisco, CA",
//     button: "buy tickets",
//   },
//   {
//     id: 6,
//     date: "Sat Aug 12 2019",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//     button: "buy tickets",
//   },
//   {
//     id: 7,
//     date: "  Fri Sep 05 2019",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//     button: "buy tickets",
//   },
//   {
//     id: 8,
//     date: " Wed Aug 11 2019",
//     venue: "Pres Club",
//     location: "San Francisco, CA",
//     button: "buy tickets",
//   },
// ];

const promise = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=anastasia"
);
//const showsUL = document.querySelector(".shows");
promise
  .then((response) => {
    console.log(response);
    // let output = "";
    // response.data.forEach((show, index) => {
    //   output =
    //     output +
    //     `<li class="show__list-item">${index + 1} ${show.place} ${
    //       show.date
    //     }</li>`;
    // });
    // showsUL.innerHTML = output;
    showTable(response.data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

function showTable(data) {
  let showsSection = document.querySelector(".shows__section");

  let showTitle = document.createElement("div");
  showTitle.classList.add("shows__title");
  showsSection.appendChild(showTitle);
  console.log(showTitle);

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

//showTable(concerts);
