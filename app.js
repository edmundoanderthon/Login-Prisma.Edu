const { createApp } = Vue;

createApp({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        handleLogin() {
            if (!this.email || !this.password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            alert(`Bem-vindo, ${this.email}!`);
        },
    },
}).mount('#app');
