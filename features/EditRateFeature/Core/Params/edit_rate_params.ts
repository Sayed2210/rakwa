import type Params from "~/base/core/Params/params";
import email from "~/components/Icons/Email.vue";
import phone from "~/components/Icons/Phone.vue";

export default class EditRateParams implements Params {
  public rateId: number;
  public listingId: string;
  public rate: number;
  public notes: string | null;
  public images: string[];

  constructor(
      rateId: number,
    listingId: string,
    rate: number,
    notes: string | null,
    images: string[],
  ) {
    this.rateId = rateId;
    this.listingId = listingId;
    this.rate = rate;
    this.notes = notes;
    this.images = images;
  }

  toMap(): { [key: string]: any } {
    const data: { [key: string]: any } = {};
    data["rate_id"] = this.rateId;
    data["listing_id"] = this.listingId;
    data["rate"] = this.rate;
    data["comment"] = this.notes;
    data["images"] = this.images;
    return data;
  }
}
