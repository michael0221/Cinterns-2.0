let internss = []
let modal = document.querySelector("aside.modal")
let modalContent = document.querySelector("aside.modal .content")

let closeButton = document.querySelector("button");


let main = document.querySelector(".interns-list")
let body = document.querySelector("html")
fetch('https://cinterns.herokuapp.com/api/getInterns.php').then((res) => {
  // interns = res.json();
  // console.log(res.json())
  return res.json()
}).then((data) => {
  console.log(data)
  internss = data;
  console.log(internss);
  data.data.forEach((element, i) => {
    let card = document.createElement("div");
    card.classList.add("interns-card");

    let containerContent =
      ` <div class="">
      <div class="interns-card__image">
          <img src="${element.image}" alt="">
          <div class="image_overlay image_overlay--blur">
              <div class="image_title">${element.name}</div>
          </div>
      </div>
      <div class="interns-card__info">
          <div class="interns-card__info--name">${element.name}</div>
          <div class="interns-card__info--role">${element.role}</div>
      </div>
  </div>`
    card.innerHTML = containerContent;
    main.appendChild(card);
  })
}).then(() => {
  let cards = document.querySelectorAll(".interns-card");
  cards.forEach((v, i) => {
    v.addEventListener('click', () => {
      console.log("mike")
      fillModal(internss.data[i])
      modal.style.display = "";
      body.style.overflow = "hidden";
      document.querySelector(".close-btn").onclick = () => {
        modal.style.display = "none";
        body.style.overflow = ""
      }
    })
  })
})

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
      body.style.overflow = ""
  }
}

const fillModal = (int) => {
    modalContent.innerHTML =
    `
    <i class="ri-close-circle-fill close-btn" id="close-btn"></i>
    <div class="content__description">
      <div class="img-socials">
          <img src="${int.image}" alt="${int.name}">
          <div class="socials">
              <a href="${int.linkedin}" target = "_blank"><i class="ri-linkedin-box-fill"></i></a>
              <a href="${int.github}" target = "_blank"><i class="ri-github-fill"></i></a>
          </div>
      </div>
      <div class="description-testimony">
          <div class="description">
              <div>
                  <b><span>Name: </span></b>${int.name}
              </div>
              <div>
                  <b><span>School: </span></b>${int.school}
              </div>
              <div>
                  <b><span>Email: </span></b>${int.email}
              </div>
              <div>
                  <b><span>Location: </span></b>${int.city}, ${int.state}, ${int.country}.
              </div>
              <div>
                  <b><span>Skills: </span></b>${int.skills}
              </div>
          </div>
          <div class="testimony">
              <em>“${int.experience}”</em>
          </div>
      </div>
    </div>
    `
}

// fetch("https://cinterns.herokuapp.com/api/getInterns.php").then(res => res.json()).then(data => console.log(data))
// let url = "https://cinterns.herokuapp.com/api/getInterns.php";

// async function run(){
//   try{
//     let response = await fetch(url, {
//       method: 'GET',
//       // mode: 'no-cors'
//     })
//     .then(response => response.json()).then(data => console.log(data));
//   }catch (e){
//     console.log(e)
//   }
// }
// run();


