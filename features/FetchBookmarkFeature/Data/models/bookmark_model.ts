import CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";

export default class BookmarkModel {
  public id: number;
  public name: string;
  public image: string;
  public description: string;
  public address: string;
  public views: string;
  public status: number;
  public category: CategoryModel;
  public rate: number;

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    address: string,
    views: string,
    status: number,
    category: CategoryModel,
    rate: number,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.address = address;
    this.views = views;
    this.status = status;
    this.category = category;
    this.rate = rate;
  }

  static fromMap(map: { [key: string]: any }): BookmarkModel {
    return new BookmarkModel(
      map["id"],
      map["title"],
      map["image"],
      map["description"],
      map["address"],
      map["views"],
      map["status"],
      CategoryModel.fromMap(map["category"]),
      map["rate"],
    );
  }
}
