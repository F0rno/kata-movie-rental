import { Rental } from "./rental";

export class Customer {
  private name: string;
  private rentals: Rental[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public addRental(arg: Rental) {
    this.rentals.push(arg);
  }

  public getName(): string {
    return this.name;
  }

  public statement(): string {
    let result = "Rental Record for " + this.getName() + "\n";

    for (const rental of this.rentals) {
      // show figures for this rental
      result +=
        "\t" +
        rental.getMovie().getTitle() +
        "\t" +
        rental.getAmount().toFixed(1) +
        "\n";
    }

    // add footer lines
    result += "Amount owed is " + this.calculateTotalAmount().toFixed(1) + "\n";
    result +=
      "You earned " +
      this.getFrequentRenterPoints() +
      " frequent renter points";

    return result;
  }

  private getFrequentRenterPoints(): number {
    let frequentRenterPoints: number = 0;
    for (const rental of this.rentals) {
      frequentRenterPoints += rental.addFrequentRenterPoints();
    }
    return frequentRenterPoints;
  }

  private calculateTotalAmount(): number {
    let totalAmount: number = 0;

    for (const rental of this.rentals) {
      totalAmount += rental.getAmount();
    }
    return totalAmount;
  }
}
