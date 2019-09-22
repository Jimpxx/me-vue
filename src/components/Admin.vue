<template>
    <div class="container">
        <h1>Admin</h1>
        <router-link to="/reports/create">Create a new report</router-link>
        <table>
            <thead>
                <tr>
                    <th>Actions</th>
                    <th>Week</th>
                    <th>Title</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows" :key="row.week">
                    <td>
                        <router-link class="actions" :to="`/reports/edit/${row.week}`">Edit</router-link>
                        <router-link class="actions" :to="`/reports/delete/${row.week}`">Delete</router-link>
                    </td>
                    <td>{{row.week}}</td>
                    <td>{{row.title}}</td>
                    <td>{{row.text}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script>
export default {
    name: "Admin",
    data() {
        return {
            rows: []
        };
    },
    mounted() {
        fetch("http://localhost:1337/reports", {
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
            .then(reports => {
                this.rows = reports.data.reports;
            });
    }
};
</script>

<style scoped>
table {
    width: 100%;
    border: 1px solid #333;
    padding: 1rem;
    text-align: left;
}
th {
    height: 3rem;
}
tr {
    padding: 1rem;
}

.actions {
    margin-right: 0.5rem;
}
</style>
