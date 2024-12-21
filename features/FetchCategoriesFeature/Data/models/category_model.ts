export default class CategoryModel {
  public id: number;
  public title: string;
  public image: string;

  constructor(id: number, title: string, image: string) {
    this.id = id;
    this.title = title;
    this.image = image;
  }

  static fromMap(map: { [key: string]: any }): CategoryModel {
    return new CategoryModel(map["id"], map["name"], map["image"]);
  }
}
