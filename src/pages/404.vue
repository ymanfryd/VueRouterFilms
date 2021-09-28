<template>
  <div class="not-found">
    <h1>
      Ничего не найдено
    </h1>
    <router-link
        :to="{ name: 'films' }"
    >
      <p>Фильмы</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    h1 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
    p {
      text-decoration: none;
      font-weight: 700;
      color: #ffffff;
      font-size: 25px;
    }
  }
</style>