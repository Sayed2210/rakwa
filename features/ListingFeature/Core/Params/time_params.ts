export default class TimeParams {
  public from: Date;
  public to: Date;

  constructor(from: Date, to: Date) {
    this.from = from;
    this.to = to;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["from"] = this.from;
    data["to"] = this.to;
    return data;
  }
}
