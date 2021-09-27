<template>
<div>
  <h1>Я найду тебя!</h1>
  <input type="text" :value="currentName" @input="findName"/>
  <h3>{{ control }}</h3>
  <ul>
    <li v-for="(name, index) of filteredNames" :key="index">{{ name }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Names",
  data() {
    return {
      names: [
          'Василий',
          'Пётр',
          'Данил',
          'Григорий',
      ],
      currentName: '',
    }
  },
  methods: {
    findName(e) {
    this.currentName = e.target.value;
  }
  },
  computed: {
    control() {
     return (`Всего имен: ${this.names.length} Совпадений: ${this.filteredNames.length}`)
    },
    filteredNames() {
      return this.names.filter(name => name.toLowerCase().includes(this.currentName.toLowerCase()))
    },
  }
}
</script>

<style scoped>
li {
  list-style: none;

}
</style>