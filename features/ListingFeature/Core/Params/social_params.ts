import type Params from "~/base/core/Params/params";

export default class SocialParams implements Params {
  public isContactWidgetEnabled: boolean;
  public facebook: string;
  public instagram: string;
  public twitter: string;
  public linkedin: string;
  public whatsapp: string;
  public youtube: string;

  constructor(
    isContactWidgetEnabled: boolean,
    facebook: string,
    instagram: string,
    twitter: string,
    linkedin: string,
    whatsapp: string,
    youtube: string,
  ) {
    this.isContactWidgetEnabled = isContactWidgetEnabled;
    this.facebook = facebook;
    this.instagram = instagram;
    this.twitter = twitter;
    this.linkedin = linkedin;
    this.whatsapp = whatsapp;
    this.youtube = youtube;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["is_contact_widget"] = this.isContactWidgetEnabled;
    data["facebook_link"] = this.facebook;
    data["instagram_link"] = this.instagram;
    data["twitter_link"] = this.twitter;
    data["linkedin_link"] = this.linkedin;
    data["whatsapp_number"] = this.whatsapp;
    data["youtube_link"] = this.youtube;
    return data;
  }
}
