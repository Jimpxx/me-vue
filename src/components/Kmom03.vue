<template>
    <div class="container">
        <h1>{{title}}</h1>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: "Kmom03",
    data() {
        return {
            title: null,
            text: null
        };
    },
    mounted() {
        fetch("http://localhost:1337/reports/kmom03", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => {
                return response.text();
            })
            .then(text => {
                return JSON.parse(text);
            })
            .then(text => {
                console.log(text.data.title);
                this.title = text.data.title;
                this.text = text.data.text;
            })
            .catch(err => {
                return err.message;
            });
    }
};
</script>

<style>
p,
h1 {
    margin-bottom: 1rem;
}
</style>
