import type Params from "~/base/core/Params/params";

export default class OpeningHours implements Params {
  public day: number;
  public from: string;
  public to: string;
  constructor(day: number, from: string, to: string) {
    this.day = day;
    this.from = from;
    this.to = to;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["day"] = this.day;
    data["from"] = this.from;
    data["to"] = this.to;
    return data;
  }
}
