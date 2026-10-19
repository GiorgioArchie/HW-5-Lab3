const ideaForm = document.querySelector("#idea-form");
const formStatus = document.querySelector("#form-status");
const propertyCards = [...document.querySelectorAll(".property-card")];

function filterProperties() {
  const neighborhood = ideaForm.elements.neighborhood.value;
  const propertyType = ideaForm.elements["property-type"].value;
  const maximumPrice = ideaForm.elements["max-price"].value;
  let visibleCount = 0;

  propertyCards.forEach((card) => {
    const matchesNeighborhood = neighborhood === "all" || card.dataset.neighborhood === neighborhood;
    const matchesType = propertyType === "all" || card.dataset.propertyType === propertyType;
    const matchesPrice = maximumPrice === "all" || Number(card.dataset.price) <= Number(maximumPrice);
    const isVisible = matchesNeighborhood && matchesType && matchesPrice;

    card.hidden = !isVisible;
    visibleCount += Number(isVisible);
  });

  formStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "sample home" : "sample homes"}.`;
}

ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterProperties();
});

ideaForm.addEventListener("reset", () => {
  requestAnimationFrame(filterProperties);
});