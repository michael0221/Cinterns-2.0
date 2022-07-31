let internss = []
let modal = document.querySelector("aside.modal")
let modalContent = document.querySelector("aside.modal .content")

let closeButton = document.querySelector("button");


let main = document.querySelector(".contain")

fetch('script/interns.json').then((res) => {
  // interns = res.json();
  // console.log(res.json())
  return res.json()
}).then((data) => {
  console.log(data)
  internss = data;
  console.log(internss);
  internss.forEach((element, i) => {
    let card = document.createElement("div");
    card.classList.add("cardd");

    let containerContent =
      ` <div class="card">
<div class="imgBx">
  <img src="${internss[i].image}" alt="">
</div>
<div class="content">
  <div class="details">
    <h2>${internss[i].name} <br> <span>${internss[i].set}</span></h2>
  </div>
</div>
</div>`
    card.innerHTML = containerContent;
    main.appendChild(card);
  })
}).then(() => {
  let cards = document.querySelectorAll(".card");
  cards.forEach((v, i) => {
    v.addEventListener('click', () => {
      console.log("mike")
      fillModal(internss[i]);
      modal.style.display = "";
      document.querySelector("button").onclick = () => {
        modal.style.display = "none";
      }
    })
  })
})


const fillModal = (int) => {

  modalContent.innerHTML =
    `
    <button id="close-btn" class="close-btn">×</button>
    <div class="content__description">
        <div class="content__img">
          <img src="./images/Michael 2.jpeg" alt="michael">
        </div>
        <div class="content__details">
            <h3 class="content__header">${int.name}</h3>
            <p><b>Year of Internship</b>: ${int.set}</p>
            <p><b>Email</b>: ${int.email}</p>
            <p><b>Phone </b>: ${int.phone}</p>
            <p><b>School</b>: ${int.school}</p>
            <p><b>Skills</b>:${int.skills}</p>
            <p><b>Duration of Internship</b>: ${int.duration}</p>
  
            <div class="socials">
            <a href="${int.facebook}" style="color: black;" target="_blank"> <i class="ri-facebook-circle-fill" style="color: #050078;"></i></a>
              <a href="${int.instagram}" style="color: black;" target="_blank"> <i class="ri-instagram-line" style="color: #fa2222;"></i></a>
              <a href="${int.twitter}" style="color: black;" target="_blank"> <i class="ri-twitter-fill" style="color: #16B7EA;"></i></a>
              <a href="${int.linkedin}" style="color: black;" target="_blank"> <i class="ri-linkedin-box-fill" style="color: #0077B5;"></i></a>
              <a href="${int.github}" style="color: black;" target="_blank"><i class="ri-github-fill"></i></a>
            </div>
        </div>
    </div>
  <div class="content__footer">
    <div class="footer">
        <p><i>"${int.testimonial}"</i></p>
    </div>
    <div class="footer__icon">
    </div>
  </div>
  `;
}

