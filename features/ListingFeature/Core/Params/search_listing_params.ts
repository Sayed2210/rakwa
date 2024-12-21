import type Params from "~/base/core/Params/params";

export default class SearchListingParams implements Params {
  keyword: string;
  page: number;
  limit: number;
  constructor(keyword: string, page: number, limit: number) {
    this.keyword = keyword;
    this.page = page;
    this.limit = limit;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["keyword"] = this.keyword;
    data["page"] = this.page;
    data["limit"] = this.limit;
    return data;
  }
}