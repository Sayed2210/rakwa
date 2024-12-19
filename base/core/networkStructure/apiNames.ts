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
  public popularCategories = "popular_categories";
  public popularServices = "popular_services";
  public popularServicesByCategory = "popular_services_by_category";
  public services = "services";
  public homeBlogs = "home_blogs";

  //blog
  public blog = "blog-details";
  public blogComments = "fetch_blog_comments";
  public addBlogComment = "make_comment";


  //listing
  public listings = "my_listings";

  //bookmark
  public bookmarks = "my_bookmarks";

  //reviews
  public reviews = "my_reviews";
  public otherReviews = "other_reviews";
  public deleteReview = "delete_review";
}

export { ApiNames };
