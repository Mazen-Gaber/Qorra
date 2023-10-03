<template>
  <div dir="rtl">
    <header class="sticky top-0 bg-[#FFFFFF] shadow h-[85px] lg:justify-between lg:px-20 md:px-9 z-[99]">
        <Navbar />
      </header>

    <transition name="fade">
      <router-view/>
    </transition>
  
      <footer class="border-t w-full px-5 pt-[88px] bg-[#FFFFFF] z-[98]">
        <Footer />
      </footer>
      <!-- <loading-page v-if="isLoading"/> -->
  </div>
 
</template>



<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo&family=DM+Sans:ital,opsz@0,9..40;1,9..40&display=swap");

nav,
div {
  font-family: "Cairo";
}

#footer-copyright {
  font-family: "DM Sans", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
import loadingPage from '@/views/loading-page.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref, watch} from 'vue';
import { state } from "@/main";

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const isLoading = ref(state.isLoading);
    // watch(
    //   () => state.isLoading,
    //   (newValue) => {
    //     isLoading.value = newValue;
    //   }
    // );
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>