<template>
  <nav class="bg-primary h-20 flex justify-between items-center px-16">
    <div class="h-full flex justify-center items-center">
        <router-link :to="{name: 'Home'}" class="h-full py-4 transition-transform hover:scale-110">
            <img src="../images/logo/horizontal_logo.png" class="h-full">
        </router-link>
    </div>
    <div class="text-base-100 text-xl flex justify-center items-center space-x-8">
        <router-link :to="{name: 'Home'}" class="transition-colors hover:text-secondary">
            HOME
        </router-link>
        <router-link :to="{name: 'About'}" class="transition-colors hover:text-secondary">
            ABOUT
        </router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>