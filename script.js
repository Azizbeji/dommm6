let plusbtn = document.getElementsByClassName("fa-plus");
let moinbtn = document.getElementsByClassName("fa-minus");
let icons = document.getElementsByClassName("fa-heart");
let trrasbtm = document.getElementsByClassName("fa-trash");
function tot() {
  let qte = document.getElementsByClassName("a+");
  let prices = document.getElementsByClassName("price");
  let tots = document.querySelector(".total");
  let sum = 0;
  for (let i = 0; i < qte.length; i++) {
    sum = sum + Number(qte[i].textContent) * Number(prices[i].textContent);
  }
  tots.textContent = sum;
  console.log(tots);
}
for (const pl of plusbtn) {
  pl.addEventListener("click", function () {
    pl.nextElementSibling.textContent++;
    tot();
  });
}
for (const pl of moinbtn) {
  pl.addEventListener("click", function () {
    if (pl.previousElementSibling.textContent > 0) {
      pl.previousElementSibling.textContent--;
    }
    tot();
  });
}
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    icons[i].classList.toggle("text-danger");
    console.log(icons[i]);
    tot();
  });
}
for (const trash of trrasbtm) {
  trash.addEventListener("click", function () {
    trash.parentElement.parentElement.parentElement.parentElement.remove();
    tot();
  });
}
