import address from "~/components/Icons/Address.vue";

export default class ListingModel {
  public id: number;
  public title: string; // Use 'string' instead of 'String'
  public address: string; // Use 'string' instead of 'String'
  public image: string;
  public description: string;
  public views: string;
  public status: number;

  constructor(
    id: number,
    title: string,
    address: string,
    image: string,
    description: string,
    views: string,
    status: number,
  ) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.image = image;
    this.description = description;
    this.views = views;
    this.status = status;
  }

  static fromMap(map: { [key: string]: any }): ListingModel {
    return new ListingModel(
      map["id"],
      map["title"],
      map["address"],
      map["image"],
      map["description"],
      map["views"],
      map["status"],
    );
  }
}
