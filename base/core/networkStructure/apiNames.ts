class ApiNames {
  private static instance: ApiNames;
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstance(): ApiNames {
    if (!this.instance) {
      this.instance = new ApiNames();
    }
    return this.instance;
  }

  public baseUrl = "http://127.0.0.1:8000/api/dashboard/";

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
}

export { ApiNames };
