<template>
    <div class="container">
        <router-link
            class="links"
            @click="updateContent"
            v-for="report in allReports"
            :key="report.week"
            :to="`/reports/${report.week}`"
        >{{report.week}}</router-link>
        <h1>{{title}}</h1>
        <p>{{week}}</p>
        <!-- <p>{{text}}</p> -->
        <div v-html="text"></div>
    </div>
</template>

<script>
export default {
    name: "Reports",
    data() {
        return {
            week: this.$route.params.kmom,
            title: null,
            text: null,
            allReports: []
        };
    },

    watch: {
        "$route.params.kmom": {
            handler: function(to) {
                this.updateContent(to);
            },
            deep: true,
            immediate: true
        }
    },

    beforeMount() {
        this.updateContent();
        this.getAll();
    },
    methods: {
        updateContent: function(week) {
            // fetch(`http://localhost:1337/reports/${week}`, {
            fetch(`https://me-api.jimmyandersson.me/reports/${week}`, {
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
                    this.week = report.data.report.week;
                    this.title = report.data.report.title;
                    this.text = report.data.report.text;
                });
        },
        getAll: function() {
            // fetch(`http://localhost:1337/reports/`, {
            fetch(`https://me-api.jimmyandersson.me/reports/`, {
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
                    this.allReports = report.data.reports;
                });
        }
    }
};
</script>

<style scoped>
.links {
    margin: 2rem 1rem;
}

p,
h1,
a {
    line-height: 1.5;
    margin: 1rem 0;
}

div >>> p,
div >>> h1,
div >>> h2,
div >>> h3,
div >>> a {
    line-height: 1.5;
    margin: 1rem 0;
}
</style>
