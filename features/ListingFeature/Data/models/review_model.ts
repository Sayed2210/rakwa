export default class ReviewModel {
  public id: number;
  public clientName: string;
  public clientImage: string;
  public rate: number;
  public createdAt: string;
  public comment: string;
  public images: string[];

  constructor(
    id: number,
    clientName: string,
    clientImage: string,
    rate: number,
    createdAt: string,
    comment: string,
    images: string[],
  ) {
    this.id = id;
    this.clientName = clientName;
    this.clientImage = clientImage;
    this.rate = rate;
    this.createdAt = createdAt;
    this.comment = comment;
    this.images = images;
  }

  static fromMap(map: { [key: string]: any }): ReviewModel {
    return new ReviewModel(
      map["id"],
      map["client_name"],
      map["client_image"],
      map["rate"],
      map["created_at"],
      map["comment"],
      map["images"],
    );
  }
}
