export function setupToggleDescriptions() {
  const definitionList = document.querySelector('.definition-list');
  if (!definitionList) return;

  definitionList.addEventListener('click', (event) => {
    const clickedTitle = event.target.closest('.definition-title');
    if (!clickedTitle) return;

    let nextElement = clickedTitle.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'DD') {
      nextElement = nextElement.nextElementSibling;
    }

    if (nextElement && nextElement.tagName === 'DD') {
      nextElement.classList.toggle('hidden');
    } else {
      console.error('Elemento <dd> correspondente não encontrado.');
    }
  });
}
