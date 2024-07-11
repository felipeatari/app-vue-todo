<template>
    <div class="space-y-2">
        <TodoItem 
            v-for="todo in store.state.todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { useStore } from 'vuex';
const store = useStore()
</script>