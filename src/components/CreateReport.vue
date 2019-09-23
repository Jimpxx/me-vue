<template>
    <div class="container">
        <form
            class
            id="new-report-form"
            @submit="createReport"
            method="post"
            action="http://localhost:1337"
        >
            <h1>Create a new report</h1>
            <p>
                <label class="input-label" for="week">Week</label>
                <select class="input-field" name="week" id="week" v-model="week" required>
                    <option value="week" selected disabled hidden>Select week</option>
                    <option value="kmom01">Kmom01</option>
                    <option value="kmom02">Kmom02</option>
                    <option value="kmom03">Kmom03</option>
                    <option value="kmom04">Kmom04</option>
                    <option value="kmom05">Kmom05</option>
                    <option value="kmom06">Kmom06</option>
                    <option value="kmom10">Kmom10</option>
                </select>
            </p>
            <p>
                <label class="input-label" for="title">Title</label>
                <input
                    class="input-field"
                    type="text"
                    name="title"
                    id="title"
                    v-model="title"
                    required
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
                    required
                ></textarea>
            </p>
            <p>
                <input type="submit" value="Create" class="button" id="createBtn" />
            </p>
        </form>
        <p class="danger">{{errorText}}</p>
    </div>
</template>

<script>
// import { store } from "../store"

export default {
    name: "CreateReport",
    components: {},
    data() {
        return {
            week: null,
            title: null,
            text: null,
            errorText: null
        };
    },
    methods: {
        createReport: function(e) {
            e.preventDefault();
            console.log("Report will be created!");

            const token = this.$store.getters.getToken;

            if (!token) {
                console.log("No token!");
                return this.$router.push("/login");
            }

            const dataObject = {
                week: this.week,
                title: this.title,
                text: this.text
            };

            // fetch("http://localhost:1337/reports", {
            fetch("https://me-api.jimmyandersson.me/reports", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(dataObject)
            })
                .then(response => {
                    return response.text();
                })
                .then(text => {
                    return JSON.parse(text);
                    // return text.json()
                })
                .then(text => {
                    console.log(text);
                    // if (text.errors) {
                    //     this.errorText = text.errors.detail || "";
                    // }
                    this.$router.push("/admin");
                })
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
