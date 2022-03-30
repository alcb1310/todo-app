Vue.createApp({
    data() {
        return {
            title: 'Todo List',
            newTodo: {
                name: '',
                completed: false,
            },
            todoItems: [],
        };
    },
    methods: {
        addCompletedClass(index) {
            return this.todoItems[index].completed;
        },
        completed(index) {
            this.todoItems[index].completed = true;
        },
        addItem() {
            this.todoItems.push({ ...this.newTodo });
            this.newTodo.name = '';
            this.newTodo.completed = false;
        },
        removeItem(index) {
            this.todoItems.splice(index, 1);
        },
    },
    computed: {
        disableAddButton() {
            return this.newTodo === '' ? true : false;
        },
    },
}).mount('#app');
