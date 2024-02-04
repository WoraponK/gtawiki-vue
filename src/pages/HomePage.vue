<template>
    <section class="grid place-items-center py-16 bg-cover relative overflow-hidden">
        <img src="/images/cover/cover.png" class="absolute h-full w-full object-cover object-center animate-zoom" draggable="false">
        <div class="z-10 w-3/5 grid place-items-center space-y-8">
            <img src="/images/logo/gta_logo.png" class="h-[256px] transition-all hover:invert hover:rotate-6">
            <p class="text-base-100 text-center font-semibold text-[18px]">Grand Theft Auto (GTA) is a series of action-adventure games created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut. It is primarily developed by British development house Rockstar North (formerly DMA Design), and published by its parent company, Rockstar Games.</p>
        </div>
    </section>
    <section class="flex flex-col items-center space-y-16 py-16 bg-primary text-base-100">
        <h2 class="text-center text-5xl font-semibold">Grand Theft Auto Collection</h2>
        <div class="flex flex-wrap justify-center gap-x-4 gap-y-6 w-3/4">
            <template v-for="collection in collections" :key="collection.id">
                <div class=" w-fit grid place-items-center space-y-2">
                    <router-link :to="`/content/${collection.id}/${collection.title}/${collection.short}`" class="w-fit">
                        <div class="h-[260px] w-[200px] overflow-hidden">
                            <img :src="collection.cover" :alt="collection.short" class="h-full w-full transition-all hover:brightness-150 hover:contrast-125 hover:scale-105">
                        </div>
                    </router-link>
                    <div class="text-center font-semibold">
                        <p class="text-2xl">{{ collection.short }}</p>
                        <p class="text-lg">{{ collection.year }}</p>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import series from '../data/series.json'

export default {
    data() {
        return {
            collections: series,
        }
    }
}
</script>

<style></style>