import { defineStore } from "pinia";

export const userSignStore = defineStore("main", {
    state () =>({
        view: "../components/SignUp.vue"
    }),
    actions: {
        changeview(){
            this.view = "../components/SignIn.vue"
        }
    }
});
 
