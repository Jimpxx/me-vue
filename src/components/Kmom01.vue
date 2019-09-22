<template>
    <div class="container">
        <!-- <h1>Kmom01</h1>
        <a href="https://github.com/Jimpxx/me-vue">Repots Github</a>
        <h2>me-vue</h2>
        <p>This project is done in Vue.js and it is done for the course DV1612 JavaScript-baserade webbramverk at BTH.</p>
        <h3>Project setup</h3>
        <p>npm install</p>
        <h3>Compiles and hot-reloads for development</h3>
        <p>npm run serve</p>
        <h3>Compiles and minifies for production</h3>
        <p>npm run build</p>
        <h3>Run your tests</h3>
        <p>npm run test</p>
        <h3>Lints and fixes files</h3>
        <p>npm run lint</p>
        <h3>Customize configuration</h3>
        <p>See [Configuration Reference](https://cli.vuejs.org/config/).</p>-->

        <h1>{{title}}</h1>
        <p>{{week}}</p>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: "Kmom01",
    data() {
        return {
            week: this.$route.params.kmom,
            title: null,
            text: null
        };
    },
    mounted() {
        fetch(`http://localhost:1337/reports/${this.week}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.text();
            })
            .then(text => {
                return JSON.parse(text);
            })
            .then(report => {
                // this.selectedReport = report.data.report;
                console.log(report);
                this.title = report.data.report.title;
                this.text = report.data.report.text;
            });
    }
    // mounted() {
    //     fetch(`http://localhost:1337/reports/${this.week}`, {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(response => {
    //             return response.text();
    //         })
    //         .then(text => {
    //             return JSON.parse(text);
    //         })
    //         .then(text => {
    //             console.log(text.data.reports.title);
    //             this.title = text.data.reports.title;
    //             this.text = text.data.text;
    //         })
    //         .catch(err => {
    //             return err.message;
    //         });
    // }
};
</script>

<style>
</style>
