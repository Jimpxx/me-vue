<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Me />-->
        <div class="nav">
            <router-link to="/">Me</router-link>
            <router-link to="/reports/week/1">Report</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Me from "./components/Me.vue";
import Report from "./components/Report.vue";

export default {
    name: "app",
    components: {
        // HelloWorld,
        Me,
        Report
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
