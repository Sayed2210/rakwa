export default class MyReviewModel {
  public id: number;
  public listing: {
    id: number;
    name: string;
  };
  public rating: number;
  public comment: string;
  public createdAt: string;


  constructor(id: number, listing: { id: number; name: string }, rating: number, comment: string, createdAt: string) {
    this.id = id;
    this.listing = listing;
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt;
  }

  static fromMap(map: { [key: string]: any }): MyReviewModel {
    return new MyReviewModel(
      map["id"],
      map["listing"],
      map["rating"],
      map["comment"],
      map["createdAt"],
    );
  }
}
