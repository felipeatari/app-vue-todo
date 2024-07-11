<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoForm />

        <TodoItems v-if="existTodos" />

        <TodoEmpty v-else />
      </template>
    </div>
  </div>
</template>

<!-- Composition API -->
<script setup>
import TodoSpinner from '@/components/TodoSpinner.vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoItems from '@/components/TodoItems.vue'
import TodoEmpty from '@/components/TodoEmpty.vue'
import { ref } from 'vue';
import { useStore } from 'vuex';

const loading = ref(true)
const store = useStore()
const existTodos = store.state.todos.length

store.dispatch('getTodos').finally(() => {
  loading.value = false
})
</script>

<!-- Options API -->
<!-- <script>
  import TodoSpinner from '@/components/TodoSpinner.vue'
  import TodoForm from '@/components/TodoForm.vue'
  import TodoItems from '@/components/TodoItems.vue'
  import TodoEmpty from '@/components/TodoEmpty.vue'
  
  export default {
    components: { TodoSpinner, TodoForm, TodoItems, TodoEmpty },
    data() {
      return {
        loading: false
      }
    },
    created() {
      this.loading = true
  
      this.$store.dispatch('getTodos').finally(() => {
        this.loading = false
      })
    }
  }
  </script> -->