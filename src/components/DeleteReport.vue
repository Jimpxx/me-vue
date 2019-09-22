<template>
    <div class="container">
        <form class id="delete-report-form" @submit="deleteReport" method="post" action>
            <h1>Edit a report</h1>
            <p>
                <label class="input-label" for="week">Week</label>
                <input
                    class="input-field"
                    type="text"
                    name="week"
                    id="week"
                    v-model="week"
                    disabled
                />
            </p>
            <p>
                <label class="input-label" for="title">Title</label>
                <input
                    class="input-field"
                    type="text"
                    name="title"
                    id="title"
                    v-model="title"
                    disabled
                />
            </p>
            <p>
                <label class="input-label" for="text">Report-text</label>
                <textarea
                    class="input-field"
                    name="text"
                    id="text"
                    cols="30"
                    rows="10"
                    v-model="text"
                    disabled
                ></textarea>
            </p>
            <p>
                <input type="submit" value="Delete" class="button" id="deleteBtn" />
            </p>
        </form>
        <p class="danger">{{errorText}}</p>
    </div>
</template>

<script>
// import { store } from "../store"

export default {
    name: "DeleteReport",
    components: {},
    data() {
        return {
            week: this.$route.params.kmom,
            title: null,
            text: null,
            selectedReport: null,
            errorText: null
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
                this.selectedReport = report.data.report;
                this.title = report.data.report.title;
                this.text = report.data.report.text;
            });
    },
    methods: {
        deleteReport: function(e) {
            e.preventDefault();
            console.log("Report will be edited!");

            const token = this.$store.getters.getToken;

            if (!token) {
                console.log("No token!");
                return this.$router.push("/login");
            }
            console.log(token);
            const dataObject = {
                week: this.week,
                title: this.title,
                text: this.text
            };

            fetch(`http://localhost:1337/reports/${this.week}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(dataObject)
            })
                .then(response => {
                    return response.text();
                })
                // .then(text => {
                //     JSON.parse(text);
                // })
                .then(data => {
                    console.log("Updated!");
                    // return report;
                    // resolve(data ? JSON.parse(data) : {});
                    return data;
                })
                .then(() => {
                    this.$router.push("/admin");
                })
                // .then(response => {
                //     return response.text();
                // })
                // .then(text => {
                //     return JSON.parse(text);
                // })
                // .then(report => {
                //     console.log("Updated!");
                //     return report;
                // })
                .catch(err => {
                    console.log(err.message);
                    return err.message;
                });
        }
    }
};
</script>

<style scoped>
.input-label {
    display: block;
    font-size: 1.5rem;
}

form p,
form h1 {
    margin-bottom: 2rem;
}

.input-field {
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
}

.input-field:focus {
    outline: 1px solid #2828d3;
}

.button {
    width: 7rem;
    padding: 0.5rem 1rem;
}

select {
    width: 10rem;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    margin-right: 0.5rem;
    border-radius: 0.3rem;
}

.danger {
    color: red;
}

@media (min-width: 768px) {
    .input-field {
        width: 50vw;
    }
}
</style>
