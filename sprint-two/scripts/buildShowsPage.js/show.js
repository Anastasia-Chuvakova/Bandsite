var concerts = [
  {
    id: 1,
    header: "Shows",
  },
  {
    id: 2,
    param1: "DATE",
    param2: "VENUE",
    param3: "LOCATION",
  },

  {
    id: 3,

    date: " Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 4,
    date: " Tue Jul 18 2018",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 5,
    date: "  Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 6,
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 7,
    date: "  Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 8,
    date: " Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
];

function showTable(data) {
  let showSection = document.querySelector(".shows__section");

  let showTitle = document.createElement("div");
  showTitle.classList.add("shows__title");
  showSection.appendChild(showTitle);
  console.log(showTitle);

  let header = data[0].header;
  let headerTag = document.createElement("h2");
  headerTag.textContent = header;
  showTitle.appendChild(headerTag);
  //console.log(headerTag);

  let showTable = document.createElement("div");
  showTable.classList.add("shows__table");
  console.log(showTable);
  showSection.appendChild(showTable);

  let paramTable = document.createElement("div");
  paramTable.classList.add("params");
  showTable.appendChild(paramTable);
  //console.log(paramTable);

  let param1 = data[1].param1;
  let paramTag = document.createElement("h2");
  paramTag.textContent = param1;
  paramTable.appendChild(paramTag);

  let param2 = data[1].param2;
  let paramTag2 = document.createElement("h2");
  paramTag2.textContent = param2;
  paramTable.appendChild(paramTag2);

  let param3 = data[1].param3;
  let paramTag3 = document.createElement("h2");
  paramTag3.textContent = param3;
  paramTable.appendChild(paramTag3);

  let showInfoTable = document.createElement("div");
  showInfoTable.classList.add("show__info");
  showTable.appendChild(showInfoTable);

  for (i = 2; i < data.length; i++) {
    let date = data[i].date;
    let dateTag = document.createElement("h2");
    dateTag.textContent = date;
    showInfoTable.appendChild(dateTag);

    let venue = data[i].venue;
    let venueTag = document.createElement("h2");
    venueTag.textContent = venue;
    showInfoTable.appendChild(venueTag);

    let location = data[i].location;
    let locationTag = document.createElement("h2");
    locationTag.textContent = location;
    showInfoTable.appendChild(locationTag);

    let button = data[i].button;
    let buttonTag = document.createElement("button");
    buttonTag.textContent = button;
    showInfoTable.appendChild(buttonTag);
  }
}

showTable(concerts);
