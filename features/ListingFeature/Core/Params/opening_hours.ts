import type Params from "~/base/core/Params/params";
import DaysParams from "~/features/ListingFeature/Core/Params/days_params";
import TimeParams from "~/features/ListingFeature/Core/Params/time_params";

export default class OpeningHoursParams implements Params {
  public day: string;
  public day_id: number
  public time: TimeParams[] = [];
  constructor(day: string,day_id: number, time: TimeParams[]) {
    this.day = day;
    this.day_id = day_id
    this.time = time;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["day_id"] = this.day_id;
    data["opening_hours"] = this.time.map((item) => item.toMap());
    return data;
  }
}
