let dragged = null;

document.querySelectorAll('.image').forEach(div => {
  div.addEventListener('dragstart', e => {
    dragged = e.target.closest('.image');
  });

  div.addEventListener('dragover', e => {
    e.preventDefault(); // Required to allow drop
  });

  div.addEventListener('drop', e => {
    e.preventDefault();
    const dropTarget = e.target.closest('.image');
    if (dragged && dropTarget && dragged !== dropTarget) {
      const draggedImg = dragged.querySelector('img');
      const dropImg = dropTarget.querySelector('img');

      // Swap image sources
      const tempSrc = draggedImg.src;
      draggedImg.src = dropImg.src;
      dropImg.src = tempSrc;

      // Optional: swap alt text
      const tempAlt = draggedImg.alt;
      draggedImg.alt = dropImg.alt;
      dropImg.alt = tempAlt;
    }
  });
});
