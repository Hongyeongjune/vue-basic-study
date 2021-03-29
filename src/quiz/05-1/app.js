var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue js !',
        value: 'This is app Value',

        uid: '10',

        flag: true
    },
    methods: {
        clickBtn() {
            console.log('Hello');
        },
        eventMethod() {
            console.log('event');
        }
    }
})