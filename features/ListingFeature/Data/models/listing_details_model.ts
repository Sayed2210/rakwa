import CategoryTypeModel from "~/features/FetchCategoryTypeFeature/Data/models/category_type_model";
import type CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";
import type CountryModel from "~/features/FetchCountriesFeature/Data/models/country_model";
import type CityModel from "~/features/FetchCitiesFeature/Data/models/city_model";

export default class ListingDetailsModel {
  public id: number;
  public title: string;
  public description: string;
  public image: string;
  public keywords: string;
  public category: CategoryModel;
  public type: CategoryTypeModel;
  public typeCategory: { id: number; title: string };
  public minPrice: number;
  public maxPrice: number;
  public totalRate: number;

  public location: {
    address: string;
    lat: number;
    long: number;
    googleMapId: string;
    country: CountryModel;
    city: CityModel;
  };

  public social: {
    isContactWidget: boolean;
    whatsapp: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string | null;
    youtube: string;
  };

  public images: { id: number; image: string }[];
  public openingHours: {
    id: number;
    day: { id: number; title: string };
    openingTime: string;
    closingTime: string;
  }[];

  public reviews: any[]; // Adjust this type as needed

  constructor(data: any) {
    const basicInfo = data.basic_information || {};
    const locationInfo = data.location_information || {};
    const social = data.sosial || {};
    const images = data.images || [];
    const openingHours = data.opening_hours || [];
    const reviews = data.reviews || [];

    // Basic Information
    this.id = basicInfo.id || 0;
    this.title = basicInfo.title || "";
    this.description = basicInfo.description || "";
    this.image = basicInfo.image || "";
    this.keywords = basicInfo.keywords || "";
    this.category = basicInfo.category || { id: 0, name: "" };
    this.type = basicInfo.type || { id: 0, name: "" };
    this.typeCategory = basicInfo.type_category || { id: 0, title: "" };
    this.minPrice = basicInfo.min_price || 0;
    this.maxPrice = basicInfo.max_price || 0;
    this.totalRate = basicInfo.total_rate || 0;

    // Location Information
    this.location = {
      address: locationInfo.address || "",
      lat: locationInfo.lat || 0,
      long: locationInfo.long || 0,
      googleMapId: locationInfo.google_map_id || "",
      country: locationInfo.country || { id: 0, title: "" },
      city: locationInfo.city || { id: 0, title: "" },
    };

    // Social Information
    this.social = {
      isContactWidget: Boolean(social.is_contact_widget),
      whatsapp: social.whatsapp_number || "",
      facebook: social.facebook_link || "",
      twitter: social.twitter_link || "",
      instagram: social.instagram_link || "",
      linkedin: social.linkedin_link || null,
      youtube: social.youtube_link || "",
    };

    // Images
    this.images = images.map((img: any) => ({
      id: img.id || 0,
      image: img.image || "",
    }));

    // Opening Hours
    this.openingHours = openingHours.map((hour: any) => ({
      id: hour.id || 0,
      day: hour.day || { id: 0, title: "" },
      openingTime: hour.opening_hours?.opening_time || "",
      closingTime: hour.opening_hours?.closing_time || "",
    }));

    // Reviews
    this.reviews = reviews;
  }

  static fromResponse(response: any): ListingDetailsModel {
    return new ListingDetailsModel(response.data);
  }
}
