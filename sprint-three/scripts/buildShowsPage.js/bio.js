let info;

//get comments object from api
const promise = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=anastasia"
);

promise
  .then((response) => {
    info = response.data;

    //sort object by date value newest to oldest
    info.sort(dateSortArray);

    //display comments
    comments(response.data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//Takes comment json object and displays in comment section
function comments(data) {
  //create non repeated html for comment section
  let commentsSection = document.querySelector(".comments__section");

  let commentHeader = document.createElement("div");
  commentHeader.classList.add("comments__title");
  commentHeader.textContent = "Join the Conversation";
  commentsSection.appendChild(commentHeader);

  let title = data[0].title;
  let titleTag = document.createElement("h2");
  titleTag.textContent = title;
  commentHeader.appendChild(titleTag);

  let commentsTable = document.createElement("div");
  commentsTable.classList.add("comments__table");
  commentsSection.appendChild(commentsTable);

  let enterTable = document.createElement("div");
  enterTable.classList.add("enter__table");
  commentsTable.appendChild(enterTable);

  let userIconBox = document.createElement("div");
  userIconBox.classList.add("user-icon__box");
  enterTable.appendChild(userIconBox);

  let userIconMain = document.createElement("img");
  userIconMain.setAttribute("src", "./assets/icons/userico.png");
  userIconBox.appendChild(userIconMain);

  let commentsForm = document.getElementById("comments-form");

  commentsForm.addEventListener("submit", displayComment);

  enterTable.appendChild(commentsForm);

  let contentTable = document.createElement("div");
  contentTable.classList.add("content-table");
  commentsTable.appendChild(contentTable);

  let commentsList = document.createElement("ul");
  commentsList.classList.add("comments-list");
  contentTable.appendChild(commentsList);

  //loop through all comment objects and create new comment html
  for (i = 0; i < data.length; i++) {
    let listsTag = document.createElement("li");
    listsTag.classList.add("list-message");
    commentsList.appendChild(listsTag);

    let commentAvatar = document.createElement("div");
    commentAvatar.classList.add("a-profile__avatar");
    listsTag.appendChild(commentAvatar);

    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", "./assets/icons/usericon-grey.png");
    commentAvatar.appendChild(imageTag);

    let profileContent = document.createElement("div");
    profileContent.classList.add("a-profile__content");
    listsTag.appendChild(profileContent);

    let profileInfo = document.createElement("div");
    profileInfo.classList.add("a-profile__info");
    profileContent.appendChild(profileInfo);

    let name = data[i].name;
    let nameTag = document.createElement("h3");
    nameTag.textContent = name;
    profileInfo.appendChild(nameTag);

    let date = data[i].timestamp;
    let dateTag = document.createElement("time");
    date = new Date(date);

    dateTag.textContent = formattedDate(date);
    profileInfo.appendChild(dateTag);

    let profileComment = document.createElement("div");
    profileComment.classList.add("a-profile__comment");
    profileContent.appendChild(profileComment);

    let comment = data[i].comment;
    let commentTag = document.createElement("p");
    commentTag.textContent = comment;
    profileComment.appendChild(commentTag);
  }
}

//takes timestamp and converts into formatted date ie: Mon, Jan, 2020
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

//on comment form submit, take form date and post back to api and create html for new comment data
function displayComment(event) {
  event.preventDefault();

  let commentsForm = document.getElementById("comments-form");

  var commentsNameVal = event.target.commentsName.value;
  var commentsTextVal = event.target.commentsText.value;

  //check for empty fields and push to info object
  if (commentsNameVal !== "" && commentsTextVal !== "") {
    info.push({
      id: info.length + 1,
      name: commentsNameVal,
      date: new Date(),
      comment: commentsTextVal,
    });
    commentsForm.reset();

    //create new comment html
    let commentsList = document.querySelector(".comments-list");

    let listsTag = document.createElement("li");
    listsTag.classList.add("list-message");
    commentsList.appendChild(listsTag);

    let commentAvatar = document.createElement("div");
    commentAvatar.classList.add("a-profile__avatar");
    listsTag.appendChild(commentAvatar);

    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", "./assets/icons/usericon-grey.png");
    commentAvatar.appendChild(imageTag);

    let profileContent = document.createElement("div");
    profileContent.classList.add("a-profile__content");
    listsTag.appendChild(profileContent);

    let profileInfo = document.createElement("div");
    profileInfo.classList.add("a-profile__info");
    profileContent.appendChild(profileInfo);

    let name = info[info.length - 1].name;
    let nameTag = document.createElement("h3");
    nameTag.textContent = name;
    profileInfo.appendChild(nameTag);

    let date = info[info.length - 1].date;
    let dateTag = document.createElement("time");
    dateTag.textContent = formattedDate(info[info.length - 1].date);
    profileInfo.appendChild(dateTag);

    let profileComment = document.createElement("div");
    profileComment.classList.add("a-profile__comment");
    profileContent.appendChild(profileComment);

    let comment = info[info.length - 1].comment;
    let commentTag = document.createElement("p");
    commentTag.textContent = comment;
    profileComment.appendChild(commentTag);

    commentsList.insertBefore(listsTag, commentsList.firstChild);

    //post new comment object to the api
    axios({
      method: "post",
      url: "https://project-1-api.herokuapp.com/comments?api_key=anastasia",
      data: {
        comment: info[info.length - 1].comment,
        name: info[info.length - 1].name,
      },
    });
  } else {
    alert("Please add a name and comment");
  }
}

//sorts array by timestamp values, newest to oldest
function dateSortArray(a, b) {
  return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
}
