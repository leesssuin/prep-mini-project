const $images = document.querySelectorAll("#image");
const $prevButton = document.querySelector(".prev-button");
const $nextButton = document.querySelector(".next-button");
const $dots = document.querySelector(".dot-wrapper");

const COUNT_IMAGE = $images.length - 1
let i = 0;

function next(e) {
  if (i < COUNT_IMAGE) {
    $images[i].classList.add("none");
    $images[i+1].classList.remove("none");
    i++;
    return;
  } else {
    $images[i].classList.add("none");
    $images[0].classList.remove("none");
    i = 0;
    return;
  }
}
$nextButton.addEventListener("click", next);

function prev(e) {
  if (i === 0) {
    $images[i].classList.add("none");
    $images[COUNT_IMAGE].classList.remove("none");
    i = COUNT_IMAGE;
    return;
  } else {
    $images[i].classList.add("none");
    $images[i-1].classList.remove("none");
    i--;
    return;
  }
}
$prevButton.addEventListener("click", prev);

$dots.addEventListener("click", function(e) {
  if(e.target.className != "dot")
  return;

  for(let i = 0; i < $images.length; i++) {
    $images[i].classList.add("none");
  }

  number = e.target.id;
  $images[number].classList.remove("none");
});
