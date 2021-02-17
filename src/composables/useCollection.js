import { ref } from "vue"
import { projectFirestore } from '../firebase/config'

const userCollection = (collection) => {
    const error = ref(null)
    const addDoc = async (doc) => {
        error.value = null
        try {
            await projectFirestore.collection(collection).add(doc)
        } catch(err) {
            console.log(err);
            error.value = 'Could not send the message'
        }
    }
    return { error, addDoc }
}

export default userCollection