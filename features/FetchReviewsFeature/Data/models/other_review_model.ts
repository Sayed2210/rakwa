export default class OtherReviewModel {
  public id: number;
  public client: {
    id: number;
    name: string;
    image: string;
  };

  public listing: {
    id: number;
    name: string;
  };
  public rating: number;
  public comment: string;
  public createdAt: string;

  constructor(
    id: number,
    client: {
      id: number;
      name: string;
      image: string;
    },
    listing: { id: number; name: string },
    rating: number,
    comment: string,
    createdAt: string,
  ) {
    this.id = id;
    this.listing = listing;
    this.client = client;
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt;
  }

  static fromMap(map: { [key: string]: any }): OtherReviewModel {
    return new OtherReviewModel(
      map["id"],
      map["client"],
      map["listing"],
      map["rating"],
      map["comment"],
      map["createdAt"],
    );
  }
}
