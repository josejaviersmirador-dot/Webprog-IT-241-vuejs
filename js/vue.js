 const app = Vue.createApp({
    data() {
        return {
         message : 'Hello po!',
            imageList: [
                { id: 1, src: 'image/okada.jpg', alt: 'Profile 1' },
                { id: 2, src: 'image/okada.jpg', alt: 'Profile 2' },
                { id: 3, src: 'image/okada.jpg', alt: 'Profile 3' }
            ]
        }
    }
})

app.mount('#profile-page-body')
