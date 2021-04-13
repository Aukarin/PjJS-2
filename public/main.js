const apps = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
