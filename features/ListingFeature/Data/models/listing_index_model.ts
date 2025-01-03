import address from "~/components/Icons/Address.vue";

export default class ListingModel {
  public id: number;
  public name: string;
  public image: string;
  public description: string;
  public address: string;
  public views: string;
  public isFav: boolean;
  public rate: number;
  public rateCount: number;
  public status: number;

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    address: string,
    views: string,
    isFav: boolean,
    status: number,
    rate: number,
    rateCount: number,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.address = address;
    this.views = views;
    this.isFav = isFav;
    this.status = status;
    this.rate = rate;
    this.rateCount = rateCount;
  }

  static fromMap(map: { [key: string]: any }): ListingModel {
    // console.log(map,"map");
    return new ListingModel(
      map["id"],
      map["title"],
      map["image"],
      map["address"],
      map["description"],
      map["views"],
      map["is_bookmark"],
      map["status"],
      map["rate"],
      map["rate_count"],
    );
  }
}
