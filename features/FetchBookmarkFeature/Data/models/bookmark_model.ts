export default class BookmarkModel {
  public id: number;
  public name: string;
  public image: string;
  public description: string;
  public address: string;
  public views: string;
  public status: number;

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    address: string,
    views: string,
    status: number,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.address = address;
    this.views = views;
    this.status = status;
  }

  static fromMap(map: { [key: string]: any }): BookmarkModel {
    return new BookmarkModel(
      map["id"],
      map["image"],
      map["email"],
      map["description"],
      map["address"],
      map["views"],
      map["status"],
    );
  }
}
