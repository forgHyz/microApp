export const qiankun = {
    async bootstrap(props) {
        console.log('umiWork boostrap', props)
    },
    async mount(props) {
        console.log('umiWork mount', props)
    },
    async unmount(props) {
        console.log('app1 unmount', props);
    },
}