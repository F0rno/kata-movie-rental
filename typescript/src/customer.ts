import { Printer } from "./printer";
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
    const printer = new Printer()

    return printer.statement(this.getName(), this.rentals, this.calculateTotalAmount(), this.getFrequentRenterPoints())
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
