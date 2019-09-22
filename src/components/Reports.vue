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
        <p>{{text}}</p>
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
                console.log(to);
                this.updateContent(to);
            },
            deep: true,
            immediate: true
            // this.updateContent(to);
        }
    },

    // created() {
    //     this.updateContent();
    // },
    // beforeRouteUpdate(to, from, next) {
    //     this.updateContent();
    //     next();
    // },
    // beforeUpdate() {
    //     this.updateContent();
    // },
    // updated() {
    //     this.updateContent();
    // },
    // mounted() {
    //     this.updateContent();
    // },
    beforeMount() {
        this.updateContent();
        this.getAll();
        // fetch(`http://localhost:1337/reports/${this.week}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(response => {
        //         return response.text();
        //     })
        //     .then(text => {
        //         return JSON.parse(text);
        //     })
        //     .then(report => {
        //         // this.selectedReport = report.data.report;
        //         console.log(report);
        //         this.week = report.data.report.week;
        //         this.title = report.data.report.title;
        //         this.text = report.data.report.text;
        //     });
    },
    methods: {
        updateContent: function(week) {
            // fetch(`http://localhost:1337/reports/${this.$route.params.kmom}`, {
            console.log("Week", week);
            fetch(`http://localhost:1337/reports/${week}`, {
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
                    this.week = report.data.report.week;
                    this.title = report.data.report.title;
                    this.text = report.data.report.text;
                });
        },
        getAll: function() {
            fetch(`http://localhost:1337/reports/`, {
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
</style>
