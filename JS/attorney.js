const attorneys = [
  {
    id: "1",
    name: "OZONMA N. C. NOBIS-ELENDU",
    image: "./images/daddy.jpg",
    linkTo: "attorney-detail.html",
  },
  {
    id: "2",
    name: "OKECHUKWU MUOMALU ",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    linkTo: "attorney-detail.html",
  },
  {
    id: "3",
    name: "IJEZIE EZEANA",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    linkTo: "attorney-detail.html",
  },
];
const url = new URLSearchParams(window.location.search);
const productId = url.get("id");

const attorney = attorneys.filter((attorney) => attorney.id == productId);
let html = "";
attorney.map(
  ({ id, name, image }) =>
    (html += `
     <div class="d-flex justify-content-center gap-5 p-5">
      <div
        style="background: #f2f2f2;"
        class="attorney__img__bg rounded pt-4 d-flex flex-column align-items-center gap-5 justify-content-center"
      >
        <img
          style="height: 35rem; width: 25rem; object-fit: cover;"
          class="rounded attorney__imgw"
          src="${image}"
          alt=""
        />
        <ul class="list-group list__parent">
          <li class="practice-areas">lorem ipsum dolor</li>
          <li class="practice-areas">
            lorem consectetur adipisicing elit. Aut explicab
          </li>
          <li class="practice-areas">Lorem ipsum dolor sit ameto veritatis</li>
          <li class="practice-areas">lorem ipsum dolor amet izeh</li>
          <li class="practice-areas">lorem</li>
          <li class="practice-areas">lorem dolore dolor saepe odit?</li>
        </ul>
      </div>
      <div class="w-50 sticky-top">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          officia. Nobis molestiae labore rerum amet excepturi temporibus nam
          enim aut, ullam laboriosam nemo harum. Fugit quia nulla quos vitae
          dolorem?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          officia. Nobis molestiae labore rerum amet excepturi temporibus nam
          enim aut, ullam laboriosam nemo harum. Fugit quia nulla quos vitae
          dolorem?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          officia. Nobis molestiae labore rerum amet excepturi temporibus nam
          enim aut, ullam laboriosam nemo harum. Fugit quia nulla quos vitae
          dolorem?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          officia. Nobis molestiae labore rerum amet excepturi temporibus nam
          enim aut, ullam laboriosam nemo harum. Fugit quia nulla quos vitae
          dolorem?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          officia. Nobis molestiae labore rerum amet excepturi temporibus nam
          enim aut, ullam laboriosam nemo harum. Fugit quia nulla quos vitae
          dolorem?
        </p>
      </div>
    </div>

    <div
      style="background: #f2f2f2;"
      class="rounded d-flex flex-wrap education mb-5 w-100 align-items-center justify-content-between"
    >
      <div>
        <h3>EDUCATION</h3>
        <ul class="list-group">
          <li>
            Bachelor of Laws (LL.B) Hons. University of Warwick, Coventry,
            England
          </li>
          <li>
            Nigerian Law School, Lagos, Nigeria – Barrister at Law (B.L.) Notary
          </li>
          <li>Public, Supreme Court of Nigeria</li>
        </ul>
      </div>
      <div>
        <h3>PROFESSIONAL MEMBERSHIP</h3>
        <ul class="list-group">
          <li>Nigerian Bar Association (NBA)</li>
          <li>International Bar Association</li>
          <li>African Private Equity and Venture Capital Association</li>
          <li>Mackrell International</li>
        </ul>
      </div>
    </div>`)
);

document.querySelector(".attorney__background").innerHTML = html;
