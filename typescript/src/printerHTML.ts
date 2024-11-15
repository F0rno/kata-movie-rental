import { Printer } from "./printer";
import { Rental } from "./rental";

export class PrinterHTML implements Printer {
  public print(
    name: string,
    rentals: Rental[],
    totalAmount: number,
    frequentPoints: number
  ): string {
    let result = "<h1>Rental Record for <em>" + name + "</em></h1>\n";

    result += "<table>\n";
    for (const rental of rentals) {
      // show figures for this rental
      result +=
        "<tr><td>" +
        rental.getMovie().getTitle() +
        "</td><td>" +
        rental.getAmount().toFixed(1) +
        "</td></tr>\n";
    }
    result += "</table>\n";

    // add footer lines
    result += "<p>Amount owed is <em>" + totalAmount.toFixed(1) + "</em></p>\n";
    result +=
      "<p>You earned <em>" +
      frequentPoints +
      "</em> frequent renter points</p>";

    return result;
  }
}
