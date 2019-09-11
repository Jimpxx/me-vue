<template>
    <div class="container">
        <form class id="register-form" @submit="checkForm" method="post" action>
            <h1>Register an account to write your weekly reports</h1>
            <p>
                <label class="input-label" for="name">Name</label>
                <input
                    class="input-field"
                    type="text"
                    name="name"
                    id="name"
                    v-model="name"
                    required
                />
            </p>
            <p>
                <label class="input-label" for="email">Email</label>
                <input
                    class="input-field"
                    type="email"
                    name="email"
                    id="email"
                    v-model="email"
                    required
                />
            </p>
            <p>
                <label class="input-label" for="password">Password (Atleast 8 characters)</label>
                <input
                    class="input-field"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                    minlength="8"
                />
            </p>
            <DatePicker />
            <p>
                <input type="submit" value="Submit" class="button" id="formSubBtn" />
            </p>
        </form>
    </div>
</template>

<script>
import DatePicker from "./DatePicker";
export default {
    name: "Form",
    components: {
        DatePicker
    },
    data() {
        return {
            name: null,
            email: null,
            password: null
        };
    },
    methods: {
        checkForm: function(e) {
            e.preventDefault();
            // if (this.name && this.email && this.password) {
            //     return true;
            // }
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

@media (min-width: 768px) {
    .input-field {
        width: 50vw;
    }
}
</style>
