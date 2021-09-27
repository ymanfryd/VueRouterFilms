<template>
  <div class="product-list">
    <div class="flex top-information">
      <h1>Письменные столы</h1>
      <Search @search="searchProducts" />
    </div>


    <ul class="list-default flex">
      <li
          v-for="(product, index) in products"
          :key="index"
      >
        <product-card
            :title="product.title"
            :price="product.price"
            :img-url="product.imgUrl"
            :count="product.count"
            @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import Search from './Search'

export default {
  name: 'ProductList',
  components: { ProductCard, Search },
  data() {
    return {
      searchText: '',
      products: [
        {
          title: 'Стол Jim',
          price: 19999,
          imgUrl: 'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
          count: 30
        },
        {
          title: 'Стол Monako',
          price: 17199,
          imgUrl: 'https://hoff.ru/upload/iblock/af2/af2d37161f217d4f489373be7da4a7a0.jpg',
          count: 20
        },
        {
          title: 'Стол с двумя ящиками Кварт MD 768',
          price: 10999,
          imgUrl: 'https://hoff.ru/upload/iblock/1cc/1ccb33b50e3e9cfa08629bf455e41855.jpg',
          count: 23
        }
      ]
    }
  },
  methods: {
    addToBasket(index) {
      console.log(index)
    },
    searchProducts(searchText) {
      console.log('Загрузить товары: ' + searchText)
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}
li {
  margin-right: 20px;

}
.top-information {
  align-items: center;
}
.top-information  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;

  /*margin-bottom: 22px;*/
}
</style>
