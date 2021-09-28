<template>
<div class="container">
  <div class="img-wrapper">
    <img
        v-if="isCatVisible"
        :class="imgFilters"
        :style="imgStyles"
        src="@/assets/cat.jpg"
     >

    <p v-else>Кот скоро вернется</p>
  </div>
  <div class="controls">
    <h1>Шаверма кот</h1>
    <h2>Фильтры</h2>
    <div class="btn-group flex">
      <button
          type="button"
          :class="imgFilters.sepia ? 'active' : ''"
          @click="imgFilters.sepia = !imgFilters.sepia"
      >
        Сепия
      </button>
      <button
          type="button"
          :class="imgFilters.bordered ? 'active' : ''"
          @click="imgFilters.bordered = !imgFilters.bordered"
      >
        Рамка
      </button>
      <button
          type="button"
          :class="imgFilters.shadow ? 'active' : ''"
          @click="imgFilters.shadow = !imgFilters.shadow"
      >
        Тень
      </button>

      <button v-if="isCatVisible"
              @click="isCatVisible = !isCatVisible"
        >
        Спрятать
      </button>
      <button v-else
              @click="isCatVisible = !isCatVisible"
      >
        Показать
      </button>
      </div>
      <div class="options">
      <h2>Размер</h2>
      <label>
        Ширина: {{imgSizes.currentWidth}}
      <input
          type="range"
          :value="imgSizes.currentWidth"
          @input="imgSizes.currentWidth = $event.target.value"
          :min="imgSizes.minWidth"
          :max="imgSizes.maxWidth"

      >
      </label>
      <label>
        Высота: {{imgSizes.currentHeight}}
        <input
            type="range"
            :value="imgSizes.currentHeight"
            @input="imgSizes.currentHeight = $event.target.value"
            :min="imgSizes.minHeight"
            :max="imgSizes.maxHeight"
        >
      </label>
      <h2>Поворот</h2>
      <label>
            Угол: {{imgRotate.currentAngle}}
        <input
            type="range"
            :value="imgRotate.currentAngle"
            @input="imgRotate.currentAngle = $event.target.value"
            :min="imgRotate.minAngle"
            :max="imgRotate.maxAngle"
        >
      </label>
      </div>
    </div>




  </div>

</template>

<script>
export default {
name: "PhotoRedactor",
  data() {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        bordered: false,
        shadow: false
      },
      imgSizes: {
        maxWidth: 640,
        maxHeight: 480,
        minWidth: 320,
        minHeight: 240,
        currentWidth: 640,
        currentHeight: 480,
      },
      imgRotate: {
        currentAngle: 0,
        minAngle: 0,
        maxAngle: 360,
      },

    }
  },
      computed: {
        imgStyles() {
          return {
            width: `${this.imgSizes.currentWidth}px`,
            height: `${this.imgSizes.currentHeight}px`,
            transform: `rotate(${this.imgRotate.currentAngle}deg)`
          }
        }
      }
}
</script>

<style scoped>
.container {
  margin-top: 40px;
  display: flex;
}
.controls {
  margin-left: 20px;
}
.img-wrapper {
  width: 640px;
  height: 480px;
  background-color: #cecece;
}
img {
  transition: 0.2s ease;
}
img.sepia {
    filter: sepia(100%);
  }
img.bordered {
    border: 5px dashed #464646
  }
img.shadow {
    box-shadow: 10px 10px 10px #464646;
  }


button {
  margin-right: 10px;
  height: 30px;
}
button.active {
    background-color: #dbdbdb;
  }

h2 {
  margin-bottom: 10px;
}
.btn-group {
  margin-bottom: 20px;
}
input[type="range"] {
  display: block;
}
</style>
