import { Rental } from "./rental";

export interface Printer {
  print(name: string, rentals: Rental[], totalAmount: number, frequentPoints: number): string
}