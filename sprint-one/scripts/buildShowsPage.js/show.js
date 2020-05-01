var concerts = [
  {
    id: 1,
    param1: "DATE",
    date: " Mon Dec 17 2018",
    param2: "VENUE",
    venue: "Ronald Lane",
    param3: "LOCATION",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 2,
    param1: "DATE",
    date: "  Tue Jul 18 2018",
    param2: "VENUE",
    venue: "Pier 3 East",
    param3: "LOCATION",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 3,
    param1: "DATE",
    date: "  Fri Jul 22 2019",
    param2: "VENUE",
    venue: "View Loungue",
    param3: "LOCATION",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 4,
    param1: "DATE",
    date: "Sat Aug 12 2019",
    param2: "VENUE",
    venue: "Hyatt Agency",
    param3: "LOCATION",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 5,
    param1: "DATE",
    date: "  Fri Sep 05 2019",
    param2: "VENUE",
    venue: "Moscow Center",
    param3: "LOCATION",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
  {
    id: 6,
    param1: "DATE",
    date: " Wed Aug 11 2019",
    param2: "VENUE",
    venue: "Pres Club",
    param3: "LOCATION",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
];

function display(event) {
  let show = document.createElement("div");
  show.classList.add("show");

  let date = event.date;
  let dateTag = document.createElement(h2);
  let dateTag = (textContent = date);

  console.log(dateTag);
}
