<template>
    <div class="container">
        <Navbar />
        <p>Chatroom</p>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch} from 'vue'

export default {
    components: { Navbar },
    setup() {
        const { user } = getUser()
        const router = useRouter() 
        watch(user, () => {
            console.log('user', user.value)
            if (user.value === null) {
                router.push('/')
            }
        }) 
    }
}
</script>

<style>
</style>