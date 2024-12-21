export default class CityModel {
  public id: number;
  public title: string;
  public image: string;

  constructor(id: number, title: string, image: string) {
    this.id = id;
    this.title = title;
    this.image = image;
  }

  static fromMap(map: { [key: string]: any }): CityModel {
    return new CityModel(map["id"], map["title"], map["image"]);
  }
}
