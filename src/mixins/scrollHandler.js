export default {
    methods: {
        onScrollEnd() {
            console.warn('You must override onScrollEnd method')
        },
        onScroll(event) {
            const container = event.target
            if (container.clientHeight + container.scrollTop >= container.scrollHeight - 1) {
                this.onScrollEnd()
            }
        }
    }
}