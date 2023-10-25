<template>
    <v-app>
        <div class="login-wrapper h-screen w-100">
            <div class="login-background d-flex">
                <div
                    class="w-50 login-text-content d-flex flex-column justify-center align-center"
                >
                    <h1 class="w-75 text-white text-h1 font-weight-bold">
                        Advanture start here
                    </h1>
                    <p class="w-75 text-white font-weight-bold">
                        Login to Join Our Community
                    </p>
                </div>
                <div
                    class="login-form w-50 d-flex flex-column justify-center align-center"
                >
                    <div class="logn-logo">
                        <h1 class="text-center">Logo</h1>
                        <p class="text-center">Hello Welcome Back!</p>
                    </div>
                    <form class="mt-16" action="">
                        <v-responsive class="mx-auto" min-width="350px" max-width="500">
                            <v-text-field
                                clearable
                                label="Email"
                                variant="solo"
                                :rules="[rules.email_required]"
                                required
                            ></v-text-field>
                        </v-responsive>

                        <v-responsive class="mx-auto" min-width="350px" max-width="500">
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
                        <v-btn class="bg-indigo w-100">Login</v-btn>
                    </form>
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
        password:'',
    }),
};
</script>
