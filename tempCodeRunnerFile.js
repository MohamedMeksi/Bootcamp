function make_pizza(size, ...toppings) {
  console.log(`\nMaking a ${size}-inch pizza with the following toppings:`)
  for (toppings of toppings) {
      console.log("- " + topping)
  }
}

export default {
  make_pizza,
}
