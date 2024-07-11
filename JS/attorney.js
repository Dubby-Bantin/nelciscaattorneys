import { attorneys } from "./utils";

const url = new URLSearchParams();
const id = url.get("id");

const attorney = attorneys.find((attorney) => attorney.id == id);
let html = "";
attorney.map(
  ({ id, name, image }) =>
    (html += `<div
      class="attorney__bg mb-5 d-flex align-items-center justify-content-center"
    >
      <h1 class="text-light fw-bold">Attorney</h1>
    </div>

    <div class="d-flex justify-content-center gap-5 p-5">
      <div class="attorney__img__bg bg-dark rounded">
        <img
          style="height: 40rem; width: 25rem; object-fit: cover;"
          class="rounded"
          src="${image}"
          alt=""
        />
      </div>
      <div class="w-50">
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
    </div>`)
);
