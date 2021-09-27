<template>
  <div class="root">
    <label>
      Введите email:
    </label>
    <input
        type="email"
        :value="email"
        @input="emailInput"
    />
    <label>
      Введите пароль:
    </label>
    <input
        type="password"
        :value="password"
        @input="passwordInput"
    />
    <hr>
    <p>
      Выберите кол-во продуктов:
    </p>
    <button
        type="button"
        @click="decrementValue"
    >
      -
    </button>
    <input
        type="number"
        :value="count"
        :min="minCount"
        :max="maxCount"
    >
    <button
        type="button"
        @click="incrementValue"
    >
      +
    </button>

  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      text: 'Hello',
      email: '',
      password: '',
      count: 1,
      maxCount: 10,
      minCount: 1

    }
  },
  methods: {
    emailInput(event) {
      this.email = event.target.value;
    },
    passwordInput(event) {
      this.password = event.target.value;
    },
    incrementValue() {
      if (this.count < this.maxCount){
        this.count += 1
      }
    },
    decrementValue() {
      if (this.count > this.minCount){
        this.count -= 1
      }
    },
  }
}
</script>