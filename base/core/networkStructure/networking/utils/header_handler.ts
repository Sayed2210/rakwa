import { useAuthStore } from '~/stores/Login'

class HeaderHandler {
  private static instance: HeaderHandler
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstance(): HeaderHandler {
    if (!this.instance) {
      this.instance = new HeaderHandler()
    }
    return this.instance
  }

  getHeader(isAuth = false): { [key: string]: string } {
    const headers: { [key: string]: string } = {}
    if (useAuthStore()?.user !== null) {
      const token: string | undefined = useAuthStore()?.user?.apiToken
      if (isAuth) {
        headers['Authorization'] = 'Bearer ' + token
      }
    }
    const savedLocale = localStorage.getItem('lang')
    if (savedLocale) {
      headers['Accept-Language'] = savedLocale
    }
    headers['Content-Type'] = 'application/json'
    return headers
  }
}

export default HeaderHandler
