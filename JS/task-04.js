let counterValue = 0;

const value = document.querySelector("#value");
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

const counterIncrement = () => {
  counterValue++;
  value.textContent = counterValue;
};

const counterDecrement = () => {
  if (counterValue > 0) {
    counterValue--;
  }
  value.textContent = counterValue;
};

decrement.addEventListener("click", () => counterDecrement());
increment.addEventListener("click", () => counterIncrement());
