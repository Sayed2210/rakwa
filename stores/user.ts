import type UserModel from "~/features/LoginFeature/Data/models/user_model";


export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as UserModel | null,
        isAuth: false,
    }),
    actions: {
        setUser(user: UserModel) {
            this.user = user;
            this.isAuth = true;
        },
        logout() {
            this.user = null;
            this.isAuth = false;
        },
    },
    persist: true,
})