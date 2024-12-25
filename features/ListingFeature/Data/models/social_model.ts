
export default class SocialModel {
  public facebook?: string;
  public instagram?: string;
  public youtube?: string;
  public linkedin?: string;
  public twitter?: string;
  public whatsapp?: string;

  constructor(
    facebook: string,
    instagram: string,
    youtube: string,
    linkedin: string,
    twitter: string,
    whatsapp: string,
  ) {
    this.facebook = facebook;
    this.instagram = instagram;
    this.youtube = youtube;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.whatsapp = whatsapp;
  }

  static fromMap(data: any): SocialModel {
    return new SocialModel(
      data.facebook_link,
      data.instagram_link,
      data.youtube_link,
      data.linkedin_link,
      data.twitter_link,
      data.whatsapp_number,
    );
  }
}
