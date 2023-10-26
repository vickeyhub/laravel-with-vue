<template>
    <v-app>
        <div class="login-wrapper h-screen" :class="{'w-100': $vuetify.display.smAndDown, 'w-100': $vuetify.display.mdAndUp}">

            <div class="login-background d-flex" :class="{'flex-column': $vuetify.display.smAndDown}">

                <div class="login-text-content d-flex" :class="{'flex-column w-100 text-center': $vuetify.display.smAndDown,'w-100 flex-column justify-center align-center': $vuetify.display.mdAndUp}">

                    <h1 :class="{'w-100 mt-10 font-weight-bold': $vuetify.display.smAndDown, 'w-75 text-h1 font-weight-bold': $vuetify.display.mdAndUp }" class="text-white">
                        Advanture start here
                    </h1>

                    <p :class="{'w-100 mt-3': $vuetify.display.smAndDown, 'w-75': $vuetify.display.mdAndUp }" class="text-white font-weight-bold">
                        Login to Join Our Community
                    </p>

                </div>

                <div class="w-100 login-form d-flex flex-column justify-center align-center" :class="{'mt-5': $vuetify.display.smAndDown}">
                    <div class="login-logo">
                        <h1 class="text-center">LOGO</h1>
                        <p class="text-center" :class="{'text-white mt-2': $vuetify.display.smAndDown}">Hello Welcome Back!</p>
                    </div>
                    <v-form @submit.prevent class="mt-16" action="">
                        <v-responsive class="mx-auto" :min-width="$vuetify.display.smAndDown? '300px': '350px'" max-width="500">
                            <v-text-field
                                clearable
                                label="Email"
                                variant="solo"
                                v-model="email"
                                :rules="[rules.email_required]"
                                required
                            ></v-text-field>
                        </v-responsive>

                        <v-responsive class="mx-auto" :min-width="$vuetify.display.smAndDown? '300px': '350px'" max-width="500">
                            <v-text-field
                                type="password"
                                clearable
                                label="Password"
                                variant="solo"
                                :rules="[rules.password_required, rules.min_length]"
                                v-model="password"
                                required
                            ></v-text-field>
                        </v-responsive>
                        <div class="h-25 d-flex justify-space-between align-center">
                            <div>
                                <v-checkbox class="remember-me-checkbox" label="Remember Me."></v-checkbox>
                            </div>
                            <div><router-link class="link" to="">Forget password</router-link></div>
                        </div>
                        <v-btn type="submit" class="bg-indigo w-100">Login</v-btn>
                    </v-form>
                </div>
            </div>
        </div>
    </v-app>
</template>
<script>
import { useHead } from "@vueuse/head";
export default {
    setup() {
        useHead({
            // Can be static or computed
            title: "Login",
            meta: [
                {
                    name: `description`,
                    content: `Login description`,
                },
            ],
        });
    },
    data: () => ({
        rules: {
            email_required: (value) => !!value || "Email field is required",
            password_required: (value) => !!value || "Password Field is required",
            min_length: (value) => (value.length >= 8 || `This field must be at least 8 characters`)
        },
        email:'',
        password:'',
    }),
};
</script>
