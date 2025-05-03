//your code here
let dragged = null;

document.querySelectorAll('.image').forEach(div => {
  div.addEventListener('dragstart', e => {
    dragged = e.target;
  });

  div.addEventListener('dragover', e => {
    e.preventDefault(); // Required to allow drop
  });

  div.addEventListener('drop', e => {
    e.preventDefault();
    if (dragged && dragged !== e.target) {
      let temp = dragged.style.backgroundImage;
      dragged.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
