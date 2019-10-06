<template>
    <div id="app">
        <div class="nav">
            <ul>
                <li>
                    <router-link to="/">Me</router-link>
                </li>
                <!-- <li>
                    <router-link to="/reports/kmom01">Kmom01</router-link>
                </li>
                <li>
                    <router-link to="/reports/kmom02">Kmom02</router-link>
                </li>
                <li>
                    <router-link to="/reports/kmom03">Kmom03</router-link>
                </li>-->
                <li>
                    <router-link to="/reports/kmom01">Reports</router-link>
                </li>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/chat">Chat</router-link>
                </li>
                <li>
                    <router-link to="/admin" v-if="this.$store.getters.getToken">Admin</router-link>
                </li>
                <!-- <li>
                    <p
                        v-if="this.$store.getters.getToken"
                    >Logged in as: {{this.$store.getters.getLoggedInUser.name}}</p>
                </li>-->
            </ul>
        </div>
        <router-view></router-view>
        <footer class="site-footer">
            <p>Copyright &copy; 2018 Jimmy Andersson</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {},
    data() {
        return {};
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 1rem 3rem;
    min-height: 78vh;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}

.nav {
    height: 40px;
    width: 100%;
    background: #ddd;
}

.nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    background: #444;
}

.nav li {
    display: inline-block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 1em;
    color: #fff;
    margin-right: -4px;
}

.nav a {
    display: block;
    text-decoration: none;
    color: #fff;
}

.nav a:hover {
    /* background-color: #222; */
    color: #2828d3;
    /* color: rgb(252, 92, 0); */
}

.site-footer {
    width: 100%;
    height: 100px;
    background-color: #444;
    padding-top: 20px;
    text-align: center;
    margin-top: 20px;
    color: #fff;
}
</style>
