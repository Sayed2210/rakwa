export default class UserModel {
  public id: number;
  public name: string; // Use 'string' instead of 'String'
  public email: string; // Use 'string' instead of 'String'
  public image: string;
  public phone?: string;
  public firstName?: string;
  public lastName?: string;
  public type?: number;
  public apiToken: string;
  public aboutMe?: string;
  public sendNotifications?: boolean;
  public facebook?: string;
  public x?: string;
  public instagram?: string;
  public youtube?: string;
  public linkedin?: string;
  public whatsapp?: string;

  constructor(
    id: number,
    name: string,
    email: string,
    apiToken: string,
    image: string,
    phone?: string,
    firstName?: string,
    lastName?: string,
    type?: number,
    aboutMe?: string,
    sendNotifications?: boolean,
    facebook?: string,
    x?: string,
    instagram?: string,
    youtube?: string,
    linkedin?: string,
    whatsapp?: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
    this.firstName = firstName;
    this.lastName = lastName;
    this.type = type;
    this.phone = phone;
    this.apiToken = apiToken;
    this.aboutMe = aboutMe;
    this.sendNotifications = sendNotifications;
    this.facebook = facebook;
    this.x = x;
    this.instagram = instagram;
    this.youtube = youtube;
    this.linkedin = linkedin;
    this.whatsapp = whatsapp;
  }

  static fromMap(map: { [key: string]: any }): UserModel {
    return new UserModel(
      map["id"],
      map["name"],
      map["email"],
      map["token"],
      map["image"],
      map["phone"],
      map["first_name"],
      map["last_name"],
      map["type"],
      map["about_me"],
      map["send_notifications"],
      map["facebook"],
      map["x"],
      map["instagram"],
      map["youtube"],
      map["linkedin"],
      map["whatsapp"],
    );
  }
}
