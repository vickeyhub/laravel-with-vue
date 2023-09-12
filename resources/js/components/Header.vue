<template>
    <div>
        <v-app-bar color="indigo">
            <template v-slot:prepend>
                <v-app-bar-nav-icon size="45px" @click.stop="drawer = !drawer"
                    ><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon
                >
            </template>
            <v-app-bar-title>Admin Panel</v-app-bar-title>
            <template v-slot:append>
                <v-btn icon="mdi-magnify"></v-btn>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left">
            <v-list>
                <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                    title="Vishal Maurya"
                    subtitle="vishalweb9@gmailcom"
                ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item
                    prepend-icon="mdi-folder"
                    title="My Files"
                    value="myfiles"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-account-multiple"
                    title="Shared with me"
                    value="shared"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-star"
                    title="Starred"
                    value="starred"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            drawer: true,
            group: null,
        };
    },
};
</script>
