<template>
    <div class="container">
        <div class="card-body">
            <div class="card-title">
                <h3>Chat Group</h3>
            </div>
            <div class="card-messages">
                <div class="messages" v-for="(msg, index) in messages" :key="index">
                    <div class="message-content">
                        <span class="user">{{ msg.user }}:</span>
                        <span class="text">{{ msg.message }}</span>
                    </div>
                    <!-- <p> -->
                    <span class="time">sent: {{ msg.time }}</span>
                    <!-- </p> -->
                </div>
            </div>
        </div>
        <div class="card-footer">
            <form @submit.prevent="sendMessage">
                <div class="form-group">
                    <label class="input-label" for="user">User:</label>
                    <input class="input-field input-user" type="text" v-model="user" />
                </div>
                <div class="form-group pb-3">
                    <label class="input-label" for="message">Message:</label>
                    <input class="input-field" type="text" v-model="message" />
                </div>
                <button type="submit" class="btn btn-success">Send</button>
            </form>
            <button @click="saveChat">Save chat</button>
            <button @click="loadChat">Load chat</button>
        </div>
    </div>
</template>

<script>
import io from "socket.io-client";
export default {
    data() {
        return {
            user: "",
            message: "",
            time: null,
            messages: [],
            socket: io("https://socket-server.jimmyandersson.me")
            // socket: io("localhost:8300")
        };
    },

    created() {},

    methods: {
        sendMessage(e) {
            e.preventDefault();
            // let d = new Date();
            // let datetext = d.toTimeString();
            // this.time = datetext.split(" ")[0];
            this.time = this.getTime();

            this.socket.emit("SEND_MESSAGE", {
                user: this.user,
                message: this.message,
                time: this.time
            });
            this.message = "";
        },

        saveChat(e) {
            e.preventDefault();
            this.socket.emit("SAVE_CHAT", this.messages);
        },

        loadChat(e) {
            e.preventDefault();
            this.socket.emit("LOAD_CHAT");
        },

        getTime() {
            let d = new Date();
            let datetext = d.toTimeString();
            return datetext.split(" ")[0];
        }
    },
    mounted() {
        this.socket.on("MESSAGE", data => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });

        this.socket.on("user-connected", data => {
            data.user = "Chatbot";
            data.message = "User joined the chatroom";
            data.time = this.getTime();
            this.messages.push(data);
        });

        this.socket.on("user-disconnected", data => {
            data.user = "Chatbot";
            data.message = "User left the chatroom";
            data.time = this.getTime();
            this.messages.push(data);
        });

        this.socket.on("LOAD_RESPONSE", chat => {
            chat.map(data => {
                this.messages.push(data);
            });
        });

        // this.socket.on("user-connected", data => {
        //     socket.broadcast.emit("response", { message: data.message });
        // });
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

.input-field.input-user {
    width: 15%;
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
}

.input-field:focus {
    outline: 1px solid #2828d3;
}

button {
    width: 7rem;
    padding: 0.5rem 1rem;
}

.card-body {
    width: 100%;
    border: 1px solid #eee;
    margin-bottom: 1rem;
}

.card-title {
    background: #2828d3;
    color: #fff;
    text-align: center;
    padding: 1.5rem;
    /* width: 100%;
    border: 1px solid #eee;
    margin-bottom: 1rem; */
    /* height: 60vh; */
}

.card-messages {
    /* width: 100%;
    border: 1px solid #eee;
    margin-bottom: 1rem; */
    height: 60vh;
    overflow-y: scroll;
    /* margin-bottom: 1rem; */
}

.messages {
    /* border: 1px solid #eee; */
    /* background: #eee; */
    /* padding: 1rem; */
    margin: 1.3rem 6rem;
    /* border-radius: 8px; */
}

.message-content {
    background: #eee;
    padding: 1rem;
    /* margin: 1rem 6rem; */
    border-radius: 8px;
}

.user {
    font-weight: bold;
    margin-right: 1rem;
}

.text {
    margin-right: 1rem;
}

.time {
    font-size: 0.7rem;
    padding-left: 0.5rem;
}

/* .card-footer {
    margin-top: 4rem;
} */

@media (min-width: 768px) {
    .input-field {
        width: 50vw;
    }
}
</style>
