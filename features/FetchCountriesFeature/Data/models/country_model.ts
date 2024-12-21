export default class CountryModel {
  public id: number;
  public title: string;
  public image: string;

  constructor(id: number, title: string, image: string) {
    this.id = id;
    this.title = title;
    this.image = image;
  }

  static fromMap(map: { [key: string]: any }): CountryModel {
    return new CountryModel(map["id"], map["title"], map["image"]);
  }
}
