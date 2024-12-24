import type Params from "~/base/core/Params/params";

export default class ShowListingDetailsParams implements Params {
  id: string;
  page: number;
  limit: number;
  constructor(id: string, page: number, limit: number) {
    this.id = id;
    this.page = page;
    this.limit = limit;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["listing_id"] = this.id;
    data["page"] = this.page;
    data["limit"] = this.limit;
    return data;
  }
}