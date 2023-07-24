abstract class Car {
  Wheel(): string {
    return "4 wheeler";
  }
  CheckAC(): string {
    return "Ac is available";
  }
  CallFacility(): string {
    return "Call facility supported";
  }
  abstract Price(): number;
  abstract getTotalSeats(): number;
  abstract Color(): string;
}

class Toyota extends Car {
  Price(): number {
    return 1000000;
  }
  getTotalSeats(): number {
    return 5;
  }
  Color(): string {
    return "white";
  }
}

class Hundyai extends Car {
  Price(): number {
    return 900000;
  }
  getTotalSeats(): number {
    return 7;
  }
  Color(): string {
    return "gray";
  }
}
