'use strict';

const app = Vue.createApp({
  data() {
    return {
      taskListNotDone: []
    }
  },
  methods: {
    addTask() {
      let newTask = {
        // 標題、詳細資料和日期 / 時間
        id: uuidv4(),// id for :key
        title: '',
        detail: '',
        dateTime: null
      }
      this.taskListNotDone.push(newTask)
    }
  }
})

app.mount('#app')
