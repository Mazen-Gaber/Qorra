<template>
  <nav class="flex items-center justify-between max-w-full px-4 py-3">
    <div class="hidden items-center lg:flex gap-x-48">
      <div class="hidden lg:flex gap-x-3">
        <div>
          <button
            class="flex rounded-sm text-lg px-11 py-2"
            style="background-color: #5165fd; color: white"
          >
            تطوع معنا
          </button>
        </div>

        <!-- <router-link to="/search-result"> -->
          <div class="flex py-2 lg:w-60 bg-[#EEEEEE]">
            <img src="../assets/search.png" alt="" class="pr-2" />
            <input
              type="text"
              placeholder="بحث"
              class="bg-transparent pr-2 outline-none rounded-sm"
              v-model="userInput"
          @keyup.enter="search"
            />
            <!-- <router-link to="/search-result"></router-link> -->
          </div>
        <!-- </router-link> -->
      </div>

      <li class="hidden lg:flex gap-x-20 list-none">
        <div>
          <router-link to="/" class="text-lg">الرئيسية</router-link>
        </div>
        
        <div>
          <router-link to="/about" class="text-lg">من نحن</router-link>
        </div>

        <div>
          <router-link to="/contact" class="text-lg">راسلنا</router-link>
        </div>
      </li>
      <!-- <router-view></router-view> -->
    
    </div>
    <!-- <transition name="fade">
      <router-view></router-view>
    </transition> -->
    

    <button class="lg:hidden" @click="toggleMenu">
      <img src="../assets/hamburgericon.png" alt="Menu"/>
    </button>

    <div>
      <img src="../assets/newspaper1.png" alt="الجريدة 1" class="justify-end" />
    </div>
  </nav>

  <div
      v-if="menuItems"
      class="top-[85px] flex flex-col lg:hidden bg-[#FFFFFF] absolute w-full pr-5 gap-y-7 pb-10 z-20"
    >
      <router-link to="/" class="text-lg" @click="toggleMenu"
        >الرئيسية</router-link
      >
      <router-link to="/about" class="text-lg" @click="toggleMenu">من نحن</router-link>
      <router-link to="/contact" class="text-lg" @click="toggleMenu">راسلنا</router-link>

      <div>
        <button
          class="flex rounded-sm text-lg px-11 py-2"
          style="background-color: #5165fd; color: white"
        >
          تطوع معنا
        </button>
      </div>
    </div>
</template>

<style>
nav a.router-link-exact-active, div a.router-link-exact-active {
  color: #5165fd;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuItems: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuItems = !this.menuItems;
    },
    search() {
      this.$router.push("/search-result");
    },
  }
};
</script>