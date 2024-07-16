const attorneys = [
  {
    id: "1",
    name: "OZONMA N. C. NOBIS-ELENDU",
    image: "./images/daddy.jpg",
  },
  {
    id: "2",
    name: "OKECHUKWU MUOMALU ",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: "3",
    name: "IJEZIE EZEANA",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

let html = "";
attorneys.map(
  ({ id, name, image }) =>
    (html += ` 
      <a href="${`attorney-detail.html?id=${id}`}" class="text-decoration-none text-light" >
          <div
          style="
          background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.4)
              ),
              url(${image}) center;
              background-size: cover;
          height: 30rem;
          width: 25rem;
          "
          class="d-flex  position-relative  overflow-hidden align-items-lg-center text-light flex-md-column text-center rounded justify-content-center attorney1"
          >
          <h3 class="fw-bold">${name}</h3>
          <p>Principal and Head of Chambers</p>
          <button
          class="read__more__button position-absolute border-0 bg-dark px-5 py-2 text-light rounded"
          >
          Read More
          </button>
      </div>
    </a>`)
);

document.querySelector(".attorney__container").innerHTML = html;
