import type Params  from "~/base/core/Params/params";

export default class BasicInformation implements Params {
    public title: string
    public logo: string
    public categories: number[]
    public serviceCategory: number
    public keywords: string

    constructor(title: string, logo: string, categories: number[], serviceCategory: number, keywords: string) {
        this.title = title
        this.logo = logo
        this.categories = categories
        this.serviceCategory = serviceCategory
        this.keywords = keywords
    }


    toMap(): { [p: string]: any } {
        const data: { [p: string]: any } = {}
        data["title"] = this.title
        data["logo"] = this.logo
        data["categories"] = this.categories
        data["serviceCategory"] = this.serviceCategory
        data["keywords"] = this.keywords
        return data
    }
}