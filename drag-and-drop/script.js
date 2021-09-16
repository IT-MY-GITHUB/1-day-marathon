const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

function itemBorder(item) {
  switch (item.parentNode.classList[1]) {
    case 'ph-start':
       item.classList = 'item it-start';
      break;
    case 'ph-during':
      item.classList = 'item it-during';
      break;
    case 'ph-done':
      item.classList = 'item it-done';
      break;
  }
}

itemBorder(item);

for(const ph of placeholders) {
  ph.addEventListener('dragover', dragover)
  ph.addEventListener('dragenter', dragenter)
  ph.addEventListener('dragleave', dragleave)
  ph.addEventListener('drop', dragdrop)
}

item.addEventListener('dragstart', (event) => {
 event.target.classList.add('hold');
 setTimeout(() => {
  event.target.classList.add('hide');
 }, 0)
})

item.addEventListener('dragend', (event) => {
  event.target.classList.remove('hold', 'hide');
})


function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item);
  itemBorder(item);
}