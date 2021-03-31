<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
/* eslint-disable */
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8081'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    this.readTodo();
  },
  updated() {
    this.readTodo();
  },
  methods: {
    addTodo(todoItem) {
      axios.post('', todoItem, {
        headers: {
          'content-type' : 'text/plain'
        }})
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            console.log('error: ', e)
          });
    },
    readTodo() {
      axios.get('')
          .then(response => {
            this.todoItems = response.data
          })
          .catch(error => console.log(error));
    },
    clearAll() {
      axios.delete('/all').catch(error => console.log(error));
    },
    removeTodo(todoItem) {
      axios.delete('/' + todoItem.key).catch(error => console.log(error));
      this.todoItems.splice(todoItem.key, 1);
    }
  },
 components: {
   'TodoHeader': TodoHeader,
   'TodoInput': TodoInput,
   'TodoList': TodoList,
   'TodoFooter': TodoFooter,
 }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
