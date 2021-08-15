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
      this.taskListNotDone.unshift(newTask)

      this.$nextTick(() => {
        // 新增工作後焦點在第一個工作的標題 input
        document.querySelectorAll('.task-list.not-done input[placeholder="標題"]')[0].focus()
      })
    }
  }
})

app.mount('#app')
