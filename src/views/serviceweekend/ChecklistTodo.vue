<template>
  <div>
    <vs-card>
      <div class="d-md-flex align-items-center pb-2">
        <h3 class="card-title mb-0">Manual Checks</h3>
        <div class="ml-auto">
          <vs-button
            @click="active = !active"
            color="primary"
            type="filled"
            class="mt-4 mt-md-0"
            disabled
          >
            <i class="mdi mdi-settings mr-1"></i> Manage
          </vs-button>
        </div>
        <div class="ml-auto">
          <vs-button
            @click="active = !active"
            color="primary"
            type="filled"
            class="mt-4 mt-md-0"
          >
            <i class="mdi mdi-border-color mr-1"></i> Add Check
          </vs-button>
        </div>
      </div>
      <hr class="custom-hr" />
      <vs-row vs-justify="center" class="mt-5">
        <vs-col
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="3"
          vs-xs="12"
        >
          <h4 class="card-title">TO DOS</h4>
          <draggable
            :list="todos"
            group="custom"
            class="cursor-move todo-cards"
            id="todos"
            @start="dragstart"
            @end="dragend"
          >
            <vs-card
              class="shadow-none"
              v-for="(todolist, index) in todos"
              :key="index"
            >
              <div class="d-flex align-items-center mb-3">
                <h5 class="card-title mb-0 w-100 text-truncate">
                  {{ todolist.todotitle }}
                </h5>
                <div class="ml-auto">
                  <span
                    class="badge badge-danger rounded-0"
                    :class="[
                      { 'display-none': todolist.badgeactive },
                      { active: isActive }
                    ]"
                  >
                    <i class="mdi mdi-bookmark"></i>
                  </span>
                </div>
              </div>

              <p class="text-muted mb-0">{{ todolist.todosubtitle }}</p>
            </vs-card>
          </draggable>
        </vs-col>
        <vs-col
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="3"
          vs-xs="12"
        >
          <h4 class="card-title">IN PROGRESS</h4>
          <draggable
            :list="progresstodo"
            group="custom"
            id="inprogress"
            class="cursor-move progress-cards"
            @start="dragstart"
            @end="dragend"
          >
            <vs-card
              class="shadow-none"
              v-for="(todolist, index) in progresstodo"
              :key="index"
            >
              <div class="d-flex align-items-center mb-3">
                <h5 class="card-title mb-0 w-100 text-truncate">
                  {{ todolist.todotitle }}
                </h5>
                <div class="ml-auto">
                  <span
                    class="badge badge-danger rounded-0"
                    :class="{ 'd-none': todolist.badgeactive }"
                  >
                    <i class="mdi mdi-bookmark"></i>
                  </span>
                </div>
              </div>
              <p class="text-muted mb-0">{{ todolist.todosubtitle }}</p>
            </vs-card>
          </draggable>
        </vs-col>
        <vs-col
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="3"
          vs-xs="12"
        >
          <h4 class="card-title">COMPLETED</h4>
          <draggable
            :list="completetodo"
            id="completed"
            group="custom"
            class="cursor-move completed-cards"
            @start="dragstart"
            @end="dragend"
          >
            <vs-card
              class="shadow-none"
              v-for="(todolist, index) in completetodo"
              :key="index"
            >
              <div class="d-flex align-items-center mb-3">
                <h5 class="card-title mb-0 w-100 text-truncate">
                  {{ todolist.todotitle }}
                </h5>
                <div class="ml-auto">
                  <span
                    class="badge badge-danger rounded-0"
                    :class="{ 'd-none': todolist.badgeactive }"
                  >
                    <i class="mdi mdi-bookmark"></i>
                  </span>
                </div>
              </div>

              <p class="text-muted mb-0">{{ todolist.todosubtitle }}</p>
            </vs-card>
          </draggable>
        </vs-col>
        <vs-col
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="3"
          vs-xs="12"
        >
          <h4 class="card-title">ON HOLD</h4>
          <draggable
            :list="onholdtodo"
            group="custom"
            class="cursor-move hold-cards"
            id="onhold"
            @start="dragstart"
            @end="dragend"
          >
            <vs-card
              class="shadow-none"
              v-for="(todolist, index) in onholdtodo"
              :key="index"
            >
              <div class="d-flex align-items-center mb-3">
                <h5 class="card-title mb-0 w-100 text-truncate">
                  {{ todolist.todotitle }}
                </h5>
                <div class="ml-auto">
                  <span
                    class="badge badge-danger rounded-0"
                    :class="{ 'd-none': todolist.badgeactive }"
                  >
                    <i class="mdi mdi-bookmark"></i>
                  </span>
                </div>
              </div>
              <p class="text-muted mb-0">{{ todolist.todosubtitle }}</p>
            </vs-card>
          </draggable>
        </vs-col>
      </vs-row>

      <vs-sidebar
        position-right
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar p-3 bg-light">
          <div class="d-flex align-items-center">
            <h3 class="card-title mb-1">Add Check</h3>
            <div class="ml-auto">
              <vs-button
                color="primary"
                large
                radius
                icon="event_note"
              ></vs-button>
            </div>
          </div>
        </div>
        <div class="mt-4 px-3">
          <form v-on:submit="submitForm">
            <vs-input
              icon-after="true"
              icon="mode_edit"
              placeholder="Task Title"
              v-model="todotitle"
              class="w-100 mb-4"
            />
            <vs-input
              icon-after="true"
              icon="mode_edit"
              placeholder="Task Subtitle"
              v-model="todosubtitle"
              class="w-100 mb-4"
            />
            <!--
              <div class="d-flex">
              <vs-checkbox
                v-model="todos.checked"
                id="bookmk"
                value
                @click="showBookmark()"
                :class="{ checked: isChk.includes('addbook') }"
                for="addbook"
                >Priority</vs-checkbox
              >
            </div>
            -->
            <vs-button
              color="primary"
              type="filled"
              class="w-100 mt-4"
              @click="addTodo()"
            >
              <i class="mdi mdi-library-plus mr-1"></i>
              Add Task
            </vs-button>
          </form>
        </div>
      </vs-sidebar>
    </vs-card>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Todo',
  data: () => ({
    title: 'Todo',
    active: false,
    todotitle: '',
    todosubtitle: '',
    bookmark: '',
    //todos: [],
    isChk: [],
    isActive: false,
    badgeactive: [],
    search: '',
    todos: [],
    progresstodo: [],
    completetodo: [],
    onholdtodo: []
  }),
  created() {
    fetch(
      'http://localhost:3000/checklisttodo/?' +
        new URLSearchParams({
          state: 'todo'
        })
    )
      .then((response) => response.json())
      .then((data) => {
        this.todos = data
      })
    fetch(
      'http://localhost:3000/checklisttodo/?' +
        new URLSearchParams({
          state: 'inprogress'
        })
    )
      .then((response) => response.json())
      .then((data) => {
        this.progresstodo = data
      })
    fetch(
      'http://localhost:3000/checklisttodo/?' +
        new URLSearchParams({
          state: 'onhold'
        })
    )
      .then((response) => response.json())
      .then((data) => {
        this.onholdtodo = data
      })
    fetch(
      'http://localhost:3000/checklisttodo/?' +
        new URLSearchParams({
          state: 'completed'
        })
    )
      .then((response) => response.json())
      .then((data) => {
        this.completetodo = data
      })
  },
  components: {
    draggable
  },
  methods: {
    addTodo() {
      const todo_bunch = {
        todotitle: this.todotitle,
        todosubtitle: this.todosubtitle,
        badgeactive: this.badgeactive,
        state: 'todo'
      }
      this.todos.unshift(todo_bunch)
      this.createCheckList(todo_bunch)

      this.todotitle = ''
      this.todosubtitle = ''
      this.badgeactive = ''
    },
    showBookmark() {
      this.isActive = !this.isActive
    },
    submitForm(e) {
      const todo_bunch = {
        todotitle: this.todotitle,
        todosubtitle: this.todosubtitle,
        badgeactive: false
      }
      this.todos.unshift(todo_bunch)
      this.todotitle = ''
      this.todosubtitle = ''
      this.badgeactive = ''
      // To prevent the form from submitting
      e.preventDefault()
    },

    async createCheckList(todo_bunch) {
      console.log('called createCheckList')
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo_bunch)
      }

      fetch('http://localhost:3000/checklisttodo', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log('created checklist', data))
    },
    async updateCheckList(todo_bunch, state) {
      const todo_data = {
        todotitle: todo_bunch.todotitle,
        state: state,
        todosubtitle: todo_bunch.todosubtitle,
        badgeactive: todo_bunch.badgeactive
      }
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo_data)
      }

      fetch(
        'http://localhost:3000/checklisttodo/' + todo_bunch.id,
        requestOptions
      ).then((response) => response.json())
      //.then(data => (
      //console.log("updated checklist", data)
      //  )
      //);
    },

    dragstart(e, item) {},
    dragend(e, item) {
      console.log(
        this.todos.length +
          ' ' +
          this.onholdtodo.length +
          '  ' +
          this.completetodo.length +
          ' ' +
          this.progresstodo.length
      )

      console.log('todos', this.todos)
      console.log('onholdtodo', this.onholdtodo)
      console.log('completetodo', this.completetodo)
      console.log('progresstodo', this.progresstodo)

      for (let prop in this.todos) {
        this.updateCheckList(this.todos[prop], 'todo')
      }
      for (let prop in this.onholdtodo) {
        this.updateCheckList(this.onholdtodo[prop], 'onhold')
      }
      for (let prop in this.completetodo) {
        this.updateCheckList(this.completetodo[prop], 'completed')
      }
      for (let prop in this.progresstodo) {
        this.updateCheckList(this.progresstodo[prop], 'inprogress')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.display-none {
  display: none;
}
.active:first-child {
  display: block;
}
</style>
