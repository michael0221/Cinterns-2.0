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


const fillModal = (int) => {

  modalContent.innerHTML =
    `
  <button class="close-btn">×</button>
              <div class="content__description">
              <div class="content__img">
              <img src="" alt="michael">
            </div>
            <div class="content__details">
                <h3 class="content__header">${int.name}</h3>
                <p><b>Role</b>: ${int.role}</p>
                <p><b>Year of Internship</b>: ${int.year_of_internship}</p>
                <p><b>Email</b>: ${int.email}</p>
                <p><b>Address</b>: ${int.city}, ${int.state}, ${int.country}. </p>
                <p><b>School</b>: ${int.school}</p>
                <p><b>Major</b>: ${int.major}</p>
                <p><b>Skills</b>:${int.skills}</p>
      
                <div class="socials">
                  <a href="${int.linkedin}" style="color: black;" target="_blank"> <i class="ri-linkedin-box-fill" style="color: #0077B5;"></i></a>
                  <a href="${int.github}" style="color: black;" target="_blank"><i class="ri-github-fill"></i></a>
                </div>
            </div>
        </div>
      <div class="content__footer">
        <div class="footer">
            <p><i>"${int.experience}"</i></p>
        </div>
        <div class="footer__icon">
        </div>
            </div>
  `;
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


