import { Movie } from "./movie";

export class Rental {
  private movie: Movie;
  private daysRented: number;

  public constructor(movie: Movie, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  public getDaysRented(): number {
    return this.daysRented;
  }

  public getMovie(): Movie {
    return this.movie;
  }

  public getAmount(): number {
    let thisAmount = 0;

    // determine amounts for each line
    switch (this.movie.getPriceCode()) {
      case Movie.REGULAR:
        thisAmount += 2;
        if (this.getDaysRented() > 2) {
          thisAmount += (this.getDaysRented() - 2) * 1.5;
        }
        return thisAmount;
      case Movie.NEW_RELEASE:
        thisAmount += this.getDaysRented() * 3;
        return thisAmount;
      case Movie.CHILDRENS:
        thisAmount += 1.5;
        if (this.getDaysRented() > 3) {
          thisAmount += (this.getDaysRented() - 3) * 1.5;
        }
        return thisAmount;
    }

    return thisAmount;
  }

  private movieIsNewRelease() {
    return this.movie.getPriceCode() === Movie.NEW_RELEASE;
  }

  private isRentedMoreThanOnce() {
    return this.getDaysRented() > 1;
  }

  addFrequentRenterPoints() {
    const hasBonus = this.movieIsNewRelease() && this.isRentedMoreThanOnce();
    if (!hasBonus) return 1;
    return 2;
  }
}
