import {defineStore} from 'pinia'
import LoginController from "~/features/LoginFeature/presentation/controllers/login_controller";
import type LoginParams from "~/features/LoginFeature/Core/Params/login_params";
import type {DataState} from "~/base/core/networkStructure/Resources/dataState/data_state";
import type UserModel from "~/features/LoginFeature/Data/models/user_model";
import type {Ref} from "vue";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as UserModel | null,
        isAuth: false,

    }),
    actions: {
        async login(params: LoginParams) {
            try {
                const router = useRouter()
                const dataState: Ref<DataState<UserModel>> = await LoginController.getInstance().login(params)
                this.user = dataState.value.data
                this.isAuth = true
                console.log(this.user)
            } catch (e) {
                console.log(e)
            }
        }
    }
})
