<template>
    <div class="container">
        <form class id="login-form" @submit="doLogin" method="post" action="http://localhost:1337">
            <h1>Login to write your weekly reports</h1>
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
                <label class="input-label" for="password">Password</label>
                <input
                    class="input-field"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                />
            </p>
            <p>
                <input type="submit" value="Login" class="button" id="loginBtn" />
            </p>
        </form>
    </div>
</template>

<script>
// import { store } from "../store"

export default {
    name: "Login",
    components: {},
    data() {
        return {
            email: null,
            password: null
        };
    },
    methods: {
        doLogin: function(e) {
            e.preventDefault();
            // if (this.name && this.email && this.password) {
            //     return true;
            // }
            const dataObject = {
                email: this.email,
                password: this.password
            };

            // fetch("http://localhost:1337/login", {
            fetch("http://localhost/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataObject)
            })
                .then(res => {
                    // console.log(res.text());
                    // console.log(res.JSON());
                    // return JSON.parse(res.data);
                    return res.text();
                })
                .then(text => {
                    return JSON.parse(text);
                })
                .then(user => {
                    // console.log(user.data.token);
                    // store.addTokenToState(user.data.token);
                    // console.log("Before added token");

                    // this.$store.dispatch("changeUser", user.data.user);
                    this.changeToken(user.data);
                    // this.changeToken(user.data.token);
                    // console.log("After added token");
                    // console.log(this.$store.state.token);
                })
                .catch(err => {
                    return err.message;
                });
        },

        changeToken(user) {
            // console.log("Changing token..");
            // this.$store.dispatch("addTokenToState", token);
            this.$store
                .dispatch("addTokenToState", user.token)
                .then(response => {
                    // console.log("Success");
                    // console.log(response);
                    this.$store.dispatch("changeUser", user.user);
                    this.$router.push("/admin");
                    return response;
                })
                .catch(err => {
                    // console.log(err.message);
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

@media (min-width: 768px) {
    .input-field {
        width: 50vw;
    }
}
</style>
