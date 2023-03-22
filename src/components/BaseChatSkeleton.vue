<template>
  <transition name="fade" mode="out-in">
    <li class="max-w-md p-3 bg-gray-100 border border-gray-300">
      <div class="flex items-start">
        <span class="image bg-gray-300" />
        <div class="ml-2 w-1/2">
          <div>
            <span class="block w-full bg-gray-300" />
          </div>
          <span class="mt-2 block w-1/2 bg-gray-300" />
        </div>
      </div>
      <div class="flex items-start mt-2 space-x-1">
        <span class="block w-1/3 bg-gray-300" />
        <span class="block w-1/3 bg-gray-300" />
        <span class="block w-1/3 bg-gray-300" />
      </div>
      <div class="mt-2">
        <p class="truncate bg-gray-300" />
      </div>
    </li>
  </transition>
</template>
<style scoped>
.image {
  height: 50px;
  min-width: 50px;
}
p,
span {
  height: 16px;
}
p {
  width: 80%;
}
</style>
