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
  public login: string = this.baseUrl + "login";

  public fetchServiceType: string = this.baseUrl + "fetch_service_types";
  //nationalities
  public fetchNationalities: string = this.baseUrl + "nationalities";
  public storeNationality: string = this.baseUrl + "store_nationality";
  public showNationality: string = this.baseUrl + "show_nationality";
  public deleteNationality: string = this.baseUrl + "delete_nationality";
  public updateNationality: string = this.baseUrl + "update_nationality";
  public fetchAllNationalities: string = this.baseUrl + "fetch_nationalities";
  //nationality prices
  public fetchNationalityPrices: string = this.baseUrl + "nationality_types";
  public storeNationalityPrices: string =
    this.baseUrl + "store_nationality_type";
  public showNationalityPrice: string = this.baseUrl + "show_nationality_type";
  public deleteNationalityPrice: string =
    this.baseUrl + "delete_nationality_type";
  public updateNationalityPrice: string =
    this.baseUrl + "update_nationality_type";

  //maid curd
  public fetchMaids: string = this.baseUrl + "maids";
  public storeMaid: string = this.baseUrl + "store_maid";
  public showMaid: string = this.baseUrl + "show_maid";
  public deleteMaid: string = this.baseUrl + "delete_maid";
  public updateMaid: string = this.baseUrl + "update_maid";

  //policy curd
  public fetchPolicies: string = this.baseUrl + "policies";
  public storePolicy: string = this.baseUrl + "store_policy";
  public showPolicy: string = this.baseUrl + "show_policy";
  public deletePolicy: string = this.baseUrl + "delete_policy";
  public updatePolicy: string = this.baseUrl + "update_policy";

  //terms curd
  public fetchTerms: string = this.baseUrl + "terms";
  public storeTerms: string = this.baseUrl + "store_term";
  public showTerms: string = this.baseUrl + "show_term";
  public deleteTerms: string = this.baseUrl + "delete_term";
  public updateTerms: string = this.baseUrl + "update_term";
}

export { ApiNames };
