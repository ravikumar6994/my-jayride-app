export interface QuoteDetails {
  from: string;
  to: string;
  listings: Listing[];
}

interface Listing {
  name: string;
  pricePerPassenger: number;
  vehicleType: {
    name: string;
    maxPassengers: string;
  }
}

export class PassengerDetail {
  name: string;
  pricePerPassenger: number;
  vehicleType: string;
  maxPassengers: string;
  constructor(listing: Listing) {
    this.name = listing.name;
    this.pricePerPassenger = listing.pricePerPassenger;
    this.vehicleType = listing.vehicleType.name;
    this.maxPassengers = listing.vehicleType.maxPassengers;
  }
}
