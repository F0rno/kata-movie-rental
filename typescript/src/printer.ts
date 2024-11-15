import { Rental } from "./rental";

export class Printer {
    public statement(name: string, rentals: Rental[], totalAmount: number, frequentPoints: number): string {
        let result = "Rental Record for " + name + "\n";
    
        for (const rental of rentals) {
          // show figures for this rental
          result +=
            "\t" +
            rental.getMovie().getTitle() +
            "\t" +
            rental.getAmount().toFixed(1) +
            "\n";
        }
    
        // add footer lines
        result += "Amount owed is " + totalAmount.toFixed(1) + "\n";
        result +=
          "You earned " +
          frequentPoints +
          " frequent renter points";
    
        return result;
      }
    
}