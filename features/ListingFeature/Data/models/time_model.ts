export default class TimeModel {
  public openingTime: string;
  public closingTime: string;
  constructor(openingTime: string, closingTime: string) {
    this.openingTime = openingTime;
    this.closingTime = closingTime;
  }
  static fromMap(map: { [key: string]: any }): TimeModel {
    return new TimeModel(map["opening_time"], map["closing_time"]);
  }
}
