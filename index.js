// ################ BOM ####################
// console.log (window);

// //alert("An alert");

// console.log(window.location);

// console.log(window.history);

// window.history.back();

// window.history.forward();

// console.log(window.screen);

// console.log (window.innerWidth);

// setTimeout(() => {
//     console.log("3000 ms has passed");
// }, 3000);

// let count=
// setInterval(() => {
//     count++
//     console.log(count);
// }, 1000);


// window.addEventListener("resize", () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
  
//     console.log({ height, width });
//   });


// ############## Local storage #############

// const username = "Carolin";
// const userage = 38;
// const isAwesome = "true";

// localStorage.setItem("username", username);
// localStorage.setItem("userage", userage);
// localStorage.setItem("isAwesome", isAwesome);


// const username = localStorage.getItem("username");
// const content = document.querySelector(".content");

// const usernameHTML= `<p> ${username} </p>`;
// content.insertAdjacentHTML("afterbegin",usernameHTML);

//localStorage.removeItem("isAwesome");

//localStorage.clear();

//console.log(localStorage);

const user = {
    name: "Carolin",
    age: 30,
    isAwesome: true,
  };
  

  
  localStorage.setItem("user", JSON.stringify(user));
    const userFromLS = localStorage.getItem("user");
    console.log(JSON.parse(userFromLS));