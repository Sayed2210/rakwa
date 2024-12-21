class ApiNames {
  private static _instance: ApiNames;
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {}
  public static get Instance(): ApiNames {
    if (!this._instance) {
      this._instance = new ApiNames();
    }
    return this._instance;
  }

  public baseUrl = "https://doma.zaidia.net/api/";

  //auth
  public login = "login";
  public register = "register";
  public logout = "logout";

  //reset password
  public forgotPassword = "reset_password";
  public resetPassword = "verify_code";
  public setNewPassword = "set_password";

  //user
  public profile = "profile";
  public updateProfile = "update_profile";
  public updatePassword = "change_password";

  // home
  public categories = "categories";
  public categoryTypes = "type_categories";
  public popularCategories = "popular_categories";
  public popularServices = "popular_services";
  public popularServicesByCategory = "popular_services_by_category";
  public services = "services";
  public homeBlogs = "home_blogs";
  
  //countries
  public countries = "countries";
  
  //cities
  public cities = "cities";

  //blog
  public blog = "blog-details";
  public blogComments = "fetch_blog_comments";
  public addBlogComment = "make_comment";


  //listing
  public listings = "my_listings";
  public addListing = "add_listing";
  public updateListing = "update_listing";
  // public deleteListing = "delete_listing";
  // public listingDetails = "listing_details";
  // public listingComments = "fetch_listing_comments";
  // public addListingComment = "make_listing_comment";
  // public listingReviews = "fetch_listing_reviews";

  //bookmark
  public bookmarks = "my_bookmarks";

  //reviews
  public reviews = "my_reviews";
  public otherReviews = "other_reviews";
  public deleteReview = "delete_review";
}

export { ApiNames };
