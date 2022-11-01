// import { faker } from '@faker-js/faker/locale/de';

var { faker } = require("@faker-js/faker");

for (let i = 1; i <= 10; i++) {
  let product = faker.commerce.product();
  let price = faker.finance.amount();
  console.log(`${i}: ${product} is £${price} `);
}
