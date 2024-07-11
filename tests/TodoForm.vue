<template>
    <form @submit.prevent="addTodo"
        class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3">
        <input v-model="title" placeholder="Adicione um novo item ..." type="text"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3">

        <button class="text-green-400 text-xs font-semibold focus:outline-none" type="submit">
            ADICIONAR
        </button>
    </form>
</template>

<!-- Composition API -->
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const title = ref('')
const store = useStore()

const addTodo = () => {
    if (!title.value) return

    const payload = {
        title: title.value,
        computed: false
    }

    store.dispatch('postTodo', payload).finally(() => {
        title.value = ''
    })
}
</script>

<!-- Options API -->
<!-- <script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo() {
            if (!this.title) return

            const payload = {
                title: this.title,
                computed: false
            }

            this.$store.dispatch('postTodo', payload).finally(() => {
                this.title = ''
            })
        }
    }
}
</script> -->