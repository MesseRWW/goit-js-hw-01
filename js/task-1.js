function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  console.log(
    "You ordered " + quantity + " droids worth " + totalPrice + " credits!"
  );
}

const price = makeTransaction("5", "15000");
