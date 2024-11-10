import type Params from "~/base/core/Params/params";

export default class DetailsParams implements Params {
  public description: string;
  public video: string;
  public Phone: string;
  public email: string;
  public website: string;
  public facebook: string;
  public twitter: string;
  public instagram: string;
  public whatsapp: string;
  public youtube: string;
  public isContactWidget: boolean;
  public priceStartRange: number;
  public priceEndRange: number;

  constructor(
    description: string,
    video: string,
    Phone: string,
    email: string,
    website: string,
    facebook: string,
    twitter: string,
    instagram: string,
    whatsapp: string,
    youtube: string,
    isContactWidget: boolean = false,
    priceStartRange: number,
    priceEndRange: number,
  ) {
    this.description = description;
    this.video = video;
    this.Phone = Phone;
    this.email = email;
    this.website = website;
    this.facebook = facebook;
    this.twitter = twitter;
    this.instagram = instagram;
    this.whatsapp = whatsapp;
    this.youtube = youtube;
    this.isContactWidget = isContactWidget;
    this.priceStartRange = priceStartRange;
    this.priceEndRange = priceEndRange;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["description"] = this.description;
    data["video"] = this.video;
    data["Phone"] = this.Phone;
    data["email"] = this.email;
    data["website"] = this.website;
    data["facebook"] = this.facebook;
    data["twitter"] = this.twitter;
    data["instagram"] = this.instagram;
    data["whatsapp"] = this.whatsapp;
    data["youtube"] = this.youtube;
    data["isContactWidget"] = this.isContactWidget;
    data["priceStartRange"] = this.priceStartRange;
    data["priceEndRange"] = this.priceEndRange;
    return data;
  }
}
