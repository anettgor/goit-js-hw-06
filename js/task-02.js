const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsId = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const newTag = document.createElement("li");
  newTag.textContent = ingredient;
  newTag.classList.add("item");
  ingredientsId.append(newTag);
});
