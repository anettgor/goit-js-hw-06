//6.1

//first part
const categories = document.querySelector("ul#categories");
const liItems = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${liItems.length}`);

// second part

liItems.forEach((e) =>
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelectorAll("li").length
    } `
  )
);
