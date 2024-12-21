export default class TimeParams {
  public from: Date;
  public to: Date;

  constructor(from: Date, to: Date) {
    this.from = from;
    this.to = to;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["opening_time"] = this.from;
    data["closing_time"] = this.to;
    return data;
  }
}
