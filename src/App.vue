<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Me />-->
        <div class="nav">
            <ul>
                <li>
                    <router-link to="/">Me</router-link>
                </li>
                <li>
                    <router-link to="/reports/week/1">Report</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
        <footer class="site-footer">
            <p>Copyright &copy; 2018 Jimmy Andersson</p>
        </footer>
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Me from "./components/Me.vue";
// import Report from "./components/Report.vue";

export default {
    name: "app",
    components: {
        // HelloWorld,
        // Me,
        // Report
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
    text-align: center;
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
    background-color: #222;
    color: rgb(252, 92, 0);
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
