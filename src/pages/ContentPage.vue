<template>
  <section class="grid place-items-center py-16 bg-cover relative overflow-hidden">
    <img src="../images/cover/cover3.png" class="absolute h-full w-full object-cover object-center animate-zoom"
      draggable="false">
    <div class="z-10 w-3/5 grid place-items-center space-y-8">
      <h1 class="text-center text-5xl font-semibold text-white">{{ collection.title }}</h1>
      <img :src="collection.cover" class="h-[412px] transition-all hover:rotate-6">
    </div>
  </section>

  <div class="grid grid-cols-[75%_25%]">
    <!-- LEFT -->
    <div class="divide-y-4 divide-neutral bg-primary py-8">
      <template v-if="collection.protagonist">
        <section class="py-8 space-y-8 flex flex-col items-center px-24">
          <h2 class="text-center text-4xl font-semibold text-accent">Protagonists</h2>
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-6">
            <template v-for="(protagonist, index) in collection.protagonist" :key="index">
              <div class="w-fit flex flex-col items-center space-y-2">
                <img :src="protagonist.image" :alt="protagonist.name" class="h-[152px]">
                <p class="text-xl text-base-100 font-semibold whitespace-pre text-wrap">{{ protagonist.name }}</p>
              </div>
            </template>
          </div>
        </section>
      </template>
      <template v-else></template>

      <template v-if="collection.map">
        <section class="py-8 space-y-8 flex flex-col items-center px-24">
          <h2 class="text-center text-4xl font-semibold text-accent">Maps</h2>
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-6">
            <template v-for="(map, index) in collection.map" :key="index">
              <div class="w-fit flex flex-col items-center space-y-2">
                <img :src="map.image" :alt="map.name" class="h-[286px]">
                <p class="text-xl text-base-100 text-center font-semibold whitespace-pre text-wrap">{{ map.name }}</p>
              </div>
            </template>
          </div>
        </section>
      </template>
      <template v-else></template>

      <template v-if="collection.history">
        <section class="py-8 space-y-8 flex flex-col items-center px-24">
          <h2 class="text-center text-4xl font-semibold text-accent">History</h2>
          <p class="text-base-100 indent-12 whitespace-pre text-wrap">{{ collection.history }}</p>
        </section>
      </template>
      <template v-else></template>

      <template v-if="collection.gameplay">
        <section class="py-8 space-y-8 flex flex-col items-center px-24">
          <h2 class="text-center text-4xl font-semibold text-accent">Gameplay</h2>
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-6">
            <template v-for="(thumbnail, index) in collection.gameplay.thumbnail" :key="index">
              <div class="w-fit flex flex-col items-center space-y-4">
                <img :src="thumbnail.image" :alt="thumbnail.des" class="h-[286px]">
                <p class="text-xl text-base-100 text-center font-semibold whitespace-pre text-wrap">{{ thumbnail.des }}</p>
              </div>
            </template>
          </div>
          <p class="text-base-100 indent-12 whitespace-pre text-wrap">{{ collection.gameplay.info }}</p>
        </section>
      </template>
      <template v-else></template>
    </div>

    <!-- RIGHT -->
    <div class="bg-neutral w-full h-full">

    </div>
  </div>
</template>

<script>
import series from '../data/series.json'

export default {
  data() {
    return {
      collection: []
    }
  },
  mounted() {
    try {
      series.map(data => {
        if (data.id == this.$route.params.id) {
          this.collection.push(data)
        }
      })

      this.collection = this.collection[0]
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style></style>