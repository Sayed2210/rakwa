import type Params from "~/base/core/Params/params";
import DaysParams from "~/features/ListingFeature/Core/Params/days_params";

export default class OpeningHoursParams implements Params {
  public days: DaysParams[];
  public timeZone: string;
  constructor(days: DaysParams[], timeZone: string) {
    this.days = days;
    this.timeZone = timeZone;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["days"] = this.days;
    data["time_zone"] = this.timeZone;
    return data;
  }
}
