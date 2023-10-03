<template>
    <div class="flex items-center justify-center h-screen">
      <Loading />
    </div>
  </template>
  
  <script>
  import Loading from "@/components/Loading.vue";
  
  export default {
    name: "LoadingPage",
    components: {
      Loading,
    },
  };
  </script>