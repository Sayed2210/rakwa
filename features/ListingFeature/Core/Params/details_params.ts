import type Params from "~/base/core/Params/params";

export default class ImagesParams implements Params {
  public images: string[];

  constructor(images: string[]) {
    this.images = images;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["image"] = this.images;

    return data;
  }
}
