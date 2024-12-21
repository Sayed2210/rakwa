import type Params from "~/base/core/Params/params";


export default class LocationParams implements Params {
    public latitude: number
    public longitude: number
    public address: string
    public friendlyAddress: string
    public region: string
    public googlePlaceId: string


    constructor(latitude: number, longitude: number, address: string, friendlyAddress: string, region: string, googlePlaceId: string) {
        this.latitude = latitude
        this.longitude = longitude
        this.address = address
        this.friendlyAddress = friendlyAddress
        this.region = region
        this.googlePlaceId = googlePlaceId
    }


    toMap(): { [p: string]: any } {
        const
            map: { [p: string]: any } = {}
        map["lat"] = this.latitude
        map["lng"] = this.longitude
        map["address"] = this.address
        map["friendly_address"] = this.friendlyAddress
        map["region"] = this.region
        map["google_map_id"] = this.googlePlaceId
        return map
    }
}