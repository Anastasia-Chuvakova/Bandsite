var info = [
  {
    id: 1,
    title: "Join the Conversation",
  },

  {
    id: 2,
    // image: "icon",
    name: "Micheal Lyons",
    date: new Date("2018-12-18"),
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    id: 3,
    // image: "insert icon",
    name: "Gary Wong",
    date: new Date("2018-12-12"),
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    id: 4,
    // image: "image",
    name: "Theodore Duncan",
    date: new Date("2018-11-15"),
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

function comments(data) {
  let commentsSection = document.querySelector(".comments__section");

  let commentHeader = document.createElement("div");
  commentHeader.classList.add("comments__title");
  commentsSection.appendChild(commentHeader);
  console.log(commentHeader);

  let title = data[0].title;
  let titleTag = document.createElement("h2");
  titleTag.textContent = title;
  commentHeader.appendChild(titleTag);

  let commentsTable = document.createElement("div");
  commentsTable.classList.add("comments__table");
  console.log(commentsTable);
  commentsSection.appendChild(commentsTable);

  let enterTable = document.createElement("div");
  enterTable.classList.add("enter__table");
  commentsTable.appendChild(enterTable);

  let userIconBox = document.createElement("div");
  userIconBox.classList.add("user-icon__box");
  enterTable.appendChild(userIconBox);

  let userIconMain = document.createElement("img");
  // let userIconMain.classList.add("user-icon__main");
  userIconMain.setAttribute("src", "./assets/icons/userico.png");
  userIconBox.appendChild(userIconMain);

  let commentsForm = document.getElementById("comments-form");

  commentsForm.addEventListener("submit", handleFormComment);

  enterTable.appendChild(commentsForm);

  let commentsList = document.createElement("ul");
  commentsList.classList.add("comments-list");
  commentsTable.appendChild(commentsList);

  for (i = 1; i < data.length; i++) {
    let listsTag = document.createElement("li");
    listsTag.classList.add("list-message");
    commentsList.appendChild(listsTag);

    //let image = data[i].image;
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", "./assets/icons/usericon-grey.png");
    listsTag.appendChild(imageTag);

    let name = data[i].name;
    let nameTag = document.createElement("h3");
    nameTag.textContent = name;
    listsTag.appendChild(nameTag);

    let date = data[i].date;
    let dateTag = document.createElement("time");
    dateTag.textContent = formattedDate(data[i].date);
    listsTag.appendChild(dateTag);

    let comment = data[i].comment;
    let commentTag = document.createElement("p");
    commentTag.textContent = comment;
    listsTag.appendChild(commentTag);
  }
}

function formattedDate(date) {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${daysOfWeek[date.getDay()]},
    ${months[date.getMonth()]},
    ${date.getFullYear()}`;
  return formattedDate;
}

function handleFormComment(event) {
  event.preventDefault();

  var commentsNameVal = event.target.commentsName.value;
  var commentsTextVal = event.target.commentsText.value;

  info.push({
    id: info.length + 1,
    name: commentsNameVal,
    date: new Date(),
    comment: commentsTextVal,
  });

  let commentsList = document.querySelector(".comments-list");

  let listsTag = document.createElement("li");
  listsTag.classList.add("list-message");
  commentsList.appendChild(listsTag);

  let imageTag = document.createElement("img");
  imageTag.setAttribute("src", "./assets/icons/usericon-grey.png");
  listsTag.appendChild(imageTag);

  let name = info[info.length - 1].name;
  let nameTag = document.createElement("h3");
  nameTag.textContent = name;
  listsTag.appendChild(nameTag);

  let date = info[info.length - 1].date;
  let dateTag = document.createElement("time");
  dateTag.textContent = formattedDate(info[info.length - 1].date);
  listsTag.appendChild(dateTag);

  let comment = info[info.length - 1].comment;
  let commentTag = document.createElement("p");
  commentTag.textContent = comment;
  listsTag.appendChild(commentTag);
}

comments(info);
