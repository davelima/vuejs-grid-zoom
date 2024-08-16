<script setup lang="ts">
import {Grid} from './js/grid.js'
import {preloadImages} from './js/utils.js'
import {onMounted} from 'vue'

onMounted(() => {
  const gridElement = document.querySelector('.grid--large')

  if (gridElement) {
    new Grid(gridElement);
    preloadImages('.grid__cell-img-inner, .slide-nav__img').then(() => document.body.classList.remove('loading'));
  }
})

defineProps<{
  cells: {
    type: "image" | "component" | "html" | "filled",
    position: string
    padded?: boolean
    prepend?: string
    title?: string
    text?: string
    link?: string
    linkText?: string
    image?: string
    html?: string
    component?: any
    componentProps?: any
    color?: string
  }[],
}>()
</script>

<template>
  <div class="grid-zoom">
    <div class="grid grid--large">
      <div
        v-for="(cell, index) in cells"
        :class="`grid__cell grid__cell-${cell.position}`"
        v-bind:class="{
          'grid__cell--padded': cell.padded
        }"
      >
        <div class="grid__cell-item grid__cell-img" v-if="cell.type === 'image'">
          <div class="grid__cell-img-inner" :style="`background-image:url(${cell.image})`" :data-item="`item-${index}`">
          </div>
        </div>

        <div class="grid__cell-item frame" v-if="cell.type === 'html'" v-html="cell.html"/>

        <div
          class="grid__cell-item frame grid__cell-component"
          v-if="cell.type === 'component'"
        >
          <div
            class="grid__cell-item grid__cell-component-container"
            :style="{backgroundColor: cell.color}"
          >
            <component :is="cell.component" v-bind="cell.componentProps"/>
          </div>
        </div>

        <div class="grid__cell-item frame grid__cell-filled" v-if="cell.type === 'filled'">
          <div class="grid__cell-filled-infill" :style="{backgroundColor: cell.color}"/>
        </div>
      </div>
    </div>

    <div class="grid-zoom-content">
      <div class="grid-zoom-content__item" v-for="(cell, index) in cells" :id="`item-${index}`">
        <span class="grid-zoom-content__item-number oh" v-if="cell.prepend"><span class="oh__inner"
                                                                                  v-html="cell.prepend"/></span>
        <h2 class="grid-zoom-content__item-heading oh" v-if="cell.title"><span class="oh__inner" v-html="cell.title"/>
        </h2>
        <p class="grid-zoom-content__item-text" v-if="cell.text" v-html="cell.text"/>
        <a class="grid-zoom-content__item-link oh" v-if="cell.link"><span class="oh__inner" v-html="cell.linkText || cell.link"/></a>
        <nav class="slide-nav">
          <div
            class="slide-nav__img slide-nav__img--prev"
            :style="(cells[index-1])?.type === 'image' ? `background-image:url(${(cells[index-1])?.image});` : null"
          >
          </div>
          <div
            class="slide-nav__img slide-nav__img--next"
            :style="(cells[index+1])?.type === 'image' ? `background-image:url(${(cells[index+1])?.image});` : null"
          >
          </div>
        </nav>
      </div>

      <button class="back">
        <svg viewBox="0 0 50 9" width="100%">
          <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path>
        </svg>
      </button>
      <nav class="grid grid--mini">
        <div
          :class="`grid__cell grid__cell-${cell.position}`"
          v-bind:class="{
            'is-image': cell.type === 'image'
          }"
          v-for="cell in cells.filter(item => item.type === 'image')"
        >
          <div class="grid__cell-img">
            <div
              class="grid__cell-img-inner"
              :style="`background-image:url(${cell.image})`"
            />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style src="./css/grid-zoom.scss"></style>
