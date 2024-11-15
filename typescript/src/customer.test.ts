import { Customer } from "./customer";
import { Movie } from "./movie";
import { PrinterASCII } from "./printerASCII";
import { PrinterHTML } from "./printerHTML";
import { Rental } from "./rental";

describe("Customer", () => {
  it("prints ascii statement", () => {
    const printer = new PrinterASCII();
    const customer = new Customer("Bob", printer);
    customer.addRental(new Rental(new Movie("Jaws", Movie.REGULAR), 2));
    customer.addRental(new Rental(new Movie("Golden Eye", Movie.REGULAR), 3));
    customer.addRental(
      new Rental(new Movie("Short New", Movie.NEW_RELEASE), 1)
    );
    customer.addRental(new Rental(new Movie("Long New", Movie.NEW_RELEASE), 2));
    customer.addRental(new Rental(new Movie("Bambi", Movie.CHILDRENS), 3));
    customer.addRental(new Rental(new Movie("Toy Story", Movie.CHILDRENS), 4));

    const expected =
      "" +
      "Rental Record for Bob\n" +
      "\tJaws\t2.0\n" +
      "\tGolden Eye\t3.5\n" +
      "\tShort New\t3.0\n" +
      "\tLong New\t6.0\n" +
      "\tBambi\t1.5\n" +
      "\tToy Story\t3.0\n" +
      "Amount owed is 19.0\n" +
      "You earned 7 frequent renter points";

    expect(customer.statement()).toBe(expected);
  });

  it("prints html statement", () => {
    const printer = new PrinterHTML();
    const customer = new Customer("Bob", printer);
    customer.addRental(new Rental(new Movie("Jaws", Movie.REGULAR), 2));
    customer.addRental(new Rental(new Movie("Golden Eye", Movie.REGULAR), 3));
    customer.addRental(
      new Rental(new Movie("Short New", Movie.NEW_RELEASE), 1)
    );
    customer.addRental(new Rental(new Movie("Long New", Movie.NEW_RELEASE), 2));
    customer.addRental(new Rental(new Movie("Bambi", Movie.CHILDRENS), 3));
    customer.addRental(new Rental(new Movie("Toy Story", Movie.CHILDRENS), 4));

    const expected = `<h1>Rental Record for <em>Bob</em></h1>
<table>
<tr><td>Jaws</td><td>2.0</td></tr>
<tr><td>Golden Eye</td><td>3.5</td></tr>
<tr><td>Short New</td><td>3.0</td></tr>
<tr><td>Long New</td><td>6.0</td></tr>
<tr><td>Bambi</td><td>1.5</td></tr>
<tr><td>Toy Story</td><td>3.0</td></tr>
</table>
<p>Amount owed is <em>19.0</em></p>
<p>You earned <em>7</em> frequent renter points</p>`;

    expect(customer.statement()).toBe(expected);
  });
});
