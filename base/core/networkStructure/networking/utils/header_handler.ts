class HeaderHandler {
  private static instance: HeaderHandler;

  private userStore = useUserStore();



  private constructor() {}

  public static getInstance(): HeaderHandler {
    if (!this.instance) {
      this.instance = new HeaderHandler();
    }
    return this.instance;
  }

  getHeader(isAuth = false): { [key: string]: string } {
    const headers: { [key: string]: string } = {};
    const userStore = this.userStore; // Initialize the store here

    if (userStore?.user !== null) {
      const token: string | undefined = userStore?.user?.apiToken;
      if (isAuth) {
        headers['Authorization'] = 'Bearer ' + token;
      }
    }

    const savedLocale = localStorage.getItem('lang');
    if (savedLocale) {
      headers['Accept-Language'] = savedLocale;
    }
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';


    return headers;
  }
}

export default HeaderHandler;
