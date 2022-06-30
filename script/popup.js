let cards = document.querySelectorAll(".card");
let interns = []

let modal = document.querySelector("aside.modal")
let modalContent = document.querySelector("aside.modal .content")

let closeButton = document.querySelector("button");

const fillModal = (int) => {

  modalContent.innerHTML =
    `
  <button class="close-btn">×</button>
              <div class="content__description">
                  <div class="content__img">
                    <img src="${int.image}" alt="michael">
                  </div>
                  <div class="content__details">
                      <h3 class="content__header">${int.name}</h3>
                      <p><b>Email</b>: ${int.email}</p>
                      <p><b>Phone </b>: ${int.phone}</p>
                      <p><b>School</b>: ${int.school}</p>
                      <p><b>Course</b>: ${int.course}</p>
                      <p><b>Duration of Internship</b>: ${int.duration}</p>
                  </div>
              </div>
            <div class="content__footer">
              <div class="footer">
                  <p> <i> "${int.testimonial}"</i></p>
              </div>
              <div class="footer__icon">
                  <a href="${int.github}" target="_blank"><i class="ri-github-fill"></i></a>
              </div>
            </div>
  `;
}

fetch('js/interns.json').then((res) => {
  // interns = res.json();
  // console.log(res.json())
  return res.json()
}).then((data) => {
  // console.log(data)
  interns = data;
}).finally(() => {
  cards.forEach((v, i) => {
    v.addEventListener('click', () => {
      console.log("michael")
      fillModal(interns[i]);
      modal.style.display = "";
      document.querySelector("button").onclick = () => {
        modal.style.display = "none";
      }
    })
  })
})




