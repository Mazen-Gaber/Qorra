<template id="app">
  <div dir="rtl" class="min-w-[340px]">

    <div class="container w-screen">
      <div class=" flex justify-center mt-4 lg:hidden mx-2 mr-9">
        <!-- <router-link to="/search-result"> -->
        <div class="flex flex-grow w-max py-3  lg:w-60 bg-[#EEEEEE]  ">
          <img src="../assets/search.png" alt="" class="" />
          <input type="text" placeholder="بحث" class="bg-transparent pr-2 outline-none rounded-sm" v-model="userInput"
            @keyup.enter="search" />
          <!-- <router-link to="/search-result"></router-link> -->
        </div>
        <!-- </router-link> -->
      </div>
      <div class="lg:grid grid-cols-3 gap-x-12 py-[32px]">

        <div class="col-start-2 col-span-2 lg:border-r-2 pr-8 py-1 ">
           <router-link to="/article">
          <img src="../assets/Rectangle2.png" class="min-w-[340px] min-h-[197px] lg:max-h-[496px] lg:max-w-[860px]"
            alt="" />
            </router-link>

          <div class="flex justify-between max-w-[850px] py-2">
            <div>
              <p class="text-sm font-normal text-[#38383880] mx-0 text-opacity-50">
                2 فبراير
                <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                5 دقائق قراءة
              </p>
            </div>
            <div>
              <span class="text-sm font-normal text-[#38383880] text-opacity-50">
                كتب بواسطة : أحمد السيد
              </span>

            </div>
          </div>

          <p class="text-[36px] text-[#383838] pb-3">فوائد القراءة اليومية</p>
        </div>


        <div v-if="isMobile == false" class="col-start-1 col-span-1 py-2 lg:mx-24 lg:-my-[615px]">
          <div class="grid lg:grid-rows-2 gap-4">
            <div>
              <img src="../assets/Rectangle3.png" class="min-w-[160px] min-h-[93px] max-h-[227px] max-w-[394px]" alt="" />
              <div class="flex justify-between min-w-[160px] max-w-[394px]  py-2">
                <div>
                  <p class="text-sm text-start font-normal text-[#38383880] mx-0 text-opacity-50">
                    2 فبراير
                    <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                    5 دقائق قراءة
                  </p>
                </div>
                <div>
                  <span class="text-sm font-normal text-[#38383880] text-opacity-50 px-0">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
              </div>

              <p class="text-base text-[#383838] pb-3">
                تعزيز التفكير النقدي من خلال القراءة
              </p>
            </div>
            <div>

              <img src="../assets/Rectangle4.png" class="min-w-[160px] min-h-[93px] max-h-[227px] max-w-[394px]" alt="" />
              <div class="flex justify-between min-w-[160px] max-w-[394px] py-2">
                <div>
                  <p class="text-sm font-normal text-[#38383880] mx-0 text-opacity-50">
                    2 فبراير
                    <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                    5 دقائق قراءة
                  </p>
                </div>
                <div>
                  <span class="text-sm font-normal text-[#38383880] text-opacity-50 px-14">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
              </div>
              <p class="text-base text-[#383838] pb-3">رحلة ممتعة لاكتشاف التراث</p>
            </div>
          </div>
        </div>

        <div v-if="isMobile == true" class="col-start-1 col-span-1 py-2 mr-8 max-w-[860px]">
          <div class="grid grid-cols-2 gap-x-12">
            <div>
              <img src="../assets/Rectangle3.png" class="min-w-[160px] min-h-[93px]" alt="" />
              <div class="flex justify-between min-w-[160px]  py-2">
                <div>
                  <span class="text-sm font-normal text-[#38383880] text-opacity-50 px-0">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
              </div>

              <p class="text-base text-[#383838] pb-3">
                تعزيز التفكير النقدي من خلال القراءة
              </p>
            </div>
            <div>
              <img src="../assets/Rectangle4.png" class="min-w-[160px] min-h-[93px]" alt="" />
              <div class="flex justify-between min-w-[160px] max-w-[394px]  py-2">
                <div>
                  <span class="text-sm font-normal text-[#38383880] text-opacity-50">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
              </div>
              <p class="text-base text-[#383838] pb-3">رحلة ممتعة لاكتشاف التراث</p>
            </div>
          </div>
        </div>


      </div>
    </div>

    <div class="container  lg:pt-[52px] pt-[10px]">
      <div class="relative flex right-2 justify-center leading-loose">
        <img src="../assets/yellow45lines.png" alt="" class="w-[46.74px] h-[42px]" />
        <div class="absolute bottom-3 lg:bottom-2 py-6 lg:left-[705px] h-[90px] w-auto">
          <p
            class="text-5xl h-[90px] font-semibold text-center bg-gradient-to-l from-[#5367FF] to-[#E553FF] bg-clip-text text-transparent">
            الأقسام
          </p>
        </div>
      </div>
    </div>
    <div class="container lg:mx-12">

      <!-- <div class="flex flex-wrap justify-around">
        <img src="../assets/ArrowRight.png" alt="">
        <img src="../assets/ArrowLeft.png" alt="">
      </div> -->
      <div class="flex justify-between lg:mx-52 mx-12">
        <div>
          <img src="../assets/ArrowRightblack.png" alt="" @click="goToNextSlide"
            :src="isLastSlide ? '../assets/ArrowRightgray.png' : '../assets/ArrowRightblack.png'">
        </div>
        <div>
          <img src="../assets/ArrowLeftblack.png" alt="" @click="goToPrevSlide">
        </div>

      </div>

      <swiper class="mx-28 mt-8 lg:mx-64 lg:mr-52" :slides-per-view="isMobile ? 2 : 4" :space-between="1"
        :slides-per-group="1" :modules="modules" @swiper="onSwiper" @slide-change="onSlideChange">


        <swiper-slide class="relative">
          <router-link to="">
            <div class="flex flex-col items-center w-[200px] h-[102px]">
              <img src="../assets/Rectangle10.png" alt="" class="brightness-50">
              <p class=" absolute text-[#FFFFFF] text-xl text-center top-8 translate-x-1 font-semibold md:text-2xl">تاريخ
              </p>
            </div>
          </router-link>
        </swiper-slide>

        <swiper-slide class="relative">
          <router-link to="">
            <div class="flex flex-col items-center w-[200px] h-[102px]">
              <img src="../assets/Rectangle9.png" alt="" class="brightness-50">
              <p class=" absolute text-[#FFFFFF] text-xl text-center top-8 translate-x-1 font-semibold md:text-2xl">أدب
              </p>
            </div>
          </router-link>
        </swiper-slide>

        <swiper-slide class="relative">
          <router-link to="">
            <div class="flex flex-col items-center w-[200px] h-[102px]">
              <img src="../assets/Rectangle8.png" alt="" class="brightness-50">
              <p class=" absolute text-[#FFFFFF] text-xl text-center top-8 translate-x-1 font-semibold md:text-2xl">شعر
              </p>
            </div>
          </router-link>
        </swiper-slide>

        <swiper-slide class="relative">
          <router-link to="">
            <div class="flex flex-col items-center w-[200px] h-[102px]">
              <img src="../assets/Rectangle7.png" alt="" class="brightness-50">
              <p class=" absolute text-[#FFFFFF] text-xl text-center top-8 translate-x-1 font-semibold md:text-2xl">فنون
              </p>
            </div>
          </router-link>
        </swiper-slide>

        <swiper-slide class="relative">
          <router-link to="">
            <div class="flex flex-col items-center w-[200px] h-[102px]">
              <img src="../assets/Rectangle6.png" alt="" class="brightness-50">
              <p class=" absolute text-[#FFFFFF] text-xl text-center top-8 translate-x-2 font-semibold md:text-2xl">فلسفة
              </p>
            </div>
          </router-link>
        </swiper-slide>

      </swiper>
    </div>

    <div class="container px-4 lg:px-16 pt-[100px]">
      <div class="relative flex justify-between right-4 leading-loose">
        <img src="../assets/yellow45lines.png" alt="" class="w-[46.74px] h-[42px] mx-[179px]" />
        <div class="absolute bottom-2 py-6 h-[90px] w-auto">
          <p class="text-5xl h-[90px] font-bold text-[#383838]">
            أحدث
            <span
              class="text-5xl h-[90px] font-bold bg-gradient-to-l from-[#5367FF] to-[#E553FF] bg-clip-text text-transparent">المقالات
            </span>
          </p>
        </div>
        <a href="" class="text-[#5165FD] mx-14"> عرض الجميع </a>
      </div>

      <div class="grid grid-rows-2 gap-x-1 px-4 py-4">
        <router-link to="/article">
          <div class="grid grid-cols-2  gap-x-1 lg:px-4 py-4">
            <div class="col-span-1">
              <img src="../assets/Rectangle11.png" alt="" class="lg:h-[369px] lg:min-w-[640px] pb-12" />
              <!-- <img src="../assets/Rectangle12.png" alt="" class="h-[369px] w-[640px] pb-12" /> -->
            </div>

            <div class="col-span-1 px-5">
              <div>
                <p class="text-[#383838] text-[10px] lg:text-[16px] text-opacity-50">
                  <img src="../assets/Line2.png" alt="" class="inline-block pl-2 " />
                  كتب بواسطة : أحمد السيد
                </p>

                <h1 class="text-[18px] lg:text-[36px] lg:pt-5 pt-2">فوائد القراءة اليومية</h1>
                <p v-if="isMobile == false"
                  class="text-[#383838] text-[12px] lg:text-[20px] text-opacity-50 py-2 leading-relaxed">
                  القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                  القراءة <br />
                  اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي.
                  في هذا <br />
                  المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                  <br />
                  إيجابي على حياتنا.
                </p>
                <p v-if="isMobile == true"
                  class="text-[#383838] text-[14px] lg:text-[20px] text-opacity-50 py-5 leading-relaxed">
                  القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.
                  <a href="" class="text-[#5165FD] text-[10px] lg:text-[20px]"> أقرأ المزيد</a>

                </p>

                <a v-if="isMobile == false" href="" class="text-[#5165FD] text-[12px] lg:text-[20px]"> أقرأ المزيد</a>

                <p class="text-[10px] lg:text-sm text-[#38383880] text-opacity-50 lg:py-7">
                  2 فبراير
                  <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                  5 دقائق قراءة
                </p>
              </div>

              <!--  -->

              <!-- <div class="py-6">
              <p class="text-[#383838] text-[16px] text-opacity-50">
                <img src="../assets/Line2.png" alt="" class="inline-block pl-2" />
                كتب بواسطة : أحمد السيد
              </p>

              <h1 class="text-[36px] pt-5">فوائد القراءة اليومية</h1>
              <p class="text-[#383838] text-[20px] text-opacity-50 py-2 leading-relaxed">
                القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                القراءة <br />
                اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي.
                في هذا <br />
                المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                <br />
                إيجابي على حياتنا.
              </p>

              <a href="" class="text-[#5165FD]"> أقرأ المزيد</a>

              <p class="text-sm text-[#38383880] text-opacity-50 py-7">
                2 فبراير
                <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                5 دقائق قراءة
              </p>
            </div> -->
            </div>
          </div>
        </router-link>
        <div class="grid grid-cols-2  gap-x-1 lg:px-4 lg:py-4 -my-5 lg:my-0">
          <div class="col-span-1">
            <img src="../assets/Rectangle12.png" alt="" class="lg:h-[369px] lg:min-w-[640px] pb-12" />
            <!-- <img src="../assets/Rectangle12.png" alt="" class="h-[369px] w-[640px] pb-12" /> -->
          </div>

          <div class="col-span-1 px-5">
            <div>
              <p class="text-[#383838] text-[10px] lg:text-[16px] text-opacity-50">
                <img src="../assets/Line2.png" alt="" class="inline-block pl-2 " />
                كتب بواسطة : أحمد السيد
              </p>

              <router-link to="/article"></router-link>
              <h1 class="text-[18px] lg:text-[36px] lg:pt-5 pt-2">فوائد القراءة اليومية</h1>
              <p v-if="isMobile == false"
                class="text-[#383838] text-[12px] lg:text-[20px] text-opacity-50 py-2 leading-relaxed">
                القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                القراءة <br />
                اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي.
                في هذا <br />
                المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                <br />
                إيجابي على حياتنا.
              </p>
              <p v-if="isMobile == true"
                class="text-[#383838] text-[14px] lg:text-[20px] text-opacity-50 py-5 leading-relaxed">
                القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.
                <a href="" class="text-[#5165FD] text-[10px] lg:text-[20px]"> أقرأ المزيد</a>

              </p>

              <a v-if="isMobile == false" href="" class="text-[#5165FD] text-[12px] lg:text-[20px]"> أقرأ المزيد</a>

              <p class="text-[10px] lg:text-sm text-[#38383880] text-opacity-50 lg:py-7">
                2 فبراير
                <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                5 دقائق قراءة
              </p>
            </div>


          </div>
        </div>


      </div>
    </div>

    <div class="container lg:px-16 px-5 py-2">
      <div class="pb-24">
        <div class="relative flex justify-between right-4 leading-loose">
          <img src="../assets/yellow45lines.png" alt="" class="w-[46.74px] h-[42px] mx-[147px]" />
          <div class="absolute bottom-2 py-6 h-[90px] w-auto">
            <p class="text-5xl h-[90px] font-bold text-[#383838]">
              الأكثر
              <span
                class="text-5xl h-[90px] font-bold bg-gradient-to-l from-[#5367FF] to-[#E553FF] bg-clip-text text-transparent">قراءة
              </span>
            </p>
          </div>

          <a href="" class="text-[#5165FD] text-[12px] mx-14"> عرض الجميع </a>
        </div>
      </div>

      <div class="pb-16 lg:mr-10 mx-16 lg:mx-24">
        <div class="flex justify-between lg:mx-16 -mx-7">
          <div>
            <img src="../assets/ArrowRightblack.png" alt="" @click="goToNextSlide1"
              :src="isLastSlide ? '../assets/ArrowRightgray.png' : '../assets/ArrowRightblack.png'">
          </div>
          <div>
            <img src="../assets/ArrowLeftblack.png" alt="" @click="goToPrevSlide1">
          </div>

        </div>

        <swiper class="lg:mx-52 lg:mt-10 mx-10 my-5" :slides-per-view="isMobile ? 1 : 2" :slides-per-group="1"
          :modules="modules" @swiper="onSwiper1" @slide-change="onSlideChange1">
          <swiper-slide>
            <div class="flex flex-wrap">
              <div class="card">
                <img src="../assets/Rectangle13.png" class="h-[227px] w-[394px]" alt="" />
                <div class="flex justify-between gap-x-50 py-2">
                  <p class="text-xs font-normal text-[#38383880] mx-0 text-opacity-50">
                    2 فبراير
                    <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                    5 دقائق قراءة
                  </p>
                  <span class="text-xs font-normal text-[#38383880] text-opacity-50 px-26">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
                <p class="text-xl text-[#383838] pb-3">
                  اليوم العالمي للغة العربية
                </p>
              </div>

            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex flex-wrap">
              <div class="card">
                <img src="../assets/Rectangle14.png" class="h-[227px] w-[394px]" alt="" />
                <div class="flex justify-between gap-x-50 py-2">
                  <p class="text-xs font-normal text-[#38383880] mx-0 text-opacity-50">
                    2 فبراير
                    <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                    5 دقائق قراءة
                  </p>
                  <span class="text-xs font-normal text-[#38383880] text-opacity-50 px-26">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
                <p class="text-xl text-[#383838] pb-3">
                  كتب تعريفك بتراث وتقاليد الشعوب
                </p>
              </div>

            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex flex-wrap">
              <div class="card">
                <img src="../assets/Rectangle15.png" class="h-[227px] w-[394px]" alt="" />
                <div class="flex justify-between gap-x-50 py-2">
                  <p class="text-xs font-normal text-[#38383880] mx-0 text-opacity-50">
                    2 فبراير
                    <img src="../assets/Ellipse1.png" class="inline-block" alt="" />
                    5 دقائق قراءة
                  </p>
                  <span class="text-xs font-normal text-[#38383880] text-opacity-50 px-26">
                    كتب بواسطة : أحمد السيد
                  </span>
                </div>
                <p class="text-xl text-[#383838] pb-3">
                  جولة في عالم الأدب العربي
                </p>
              </div>

            </div>
          </swiper-slide>



        </swiper>
      </div>


    </div>

    <div class="container grid lg:grid-rows-3 w-[1360px] mx-11 py-12 gap-y-2 justify-center border-t border-b mb-[88px]">
      <div class="row-span-1">
        <p class="text-[30px] lg:text-[40px] text-center">اشترك ليصلك جميع المقالات</p>
      </div>

      <div class="row-span-1">
        <p class="text-[20px] lg:text-xl text-center text-[#38383880] text-opacity-80 py-1">
          ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية
          <br />هذه الخدمة مجانية تماماً
        </p>
      </div>

      <div>
        <div class="flex py-2">
          <div>
            <button
              class="flex rounded-sm text-[20px] lg:text-2xl font-bold items-center justify-center w-[185px] h-[76px]"
              style="background-color: #5165fd; color: #ffffffff">
              أشترك
            </button>
          </div>

          <div class="flex py-2 w-[370px] lg:w-[547px] lg:h-[76px] border bg-[#FFFFFF]">
            <input type="email" placeholder="البريد الإلكتروني"
              class="bg-transparent text-[20px] lg:text-2xl pr-3 outline-none rounded-sm" />
          </div>
        </div>
      </div>
    </div>
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
</style>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from "swiper/core";
// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

SwiperCore.use([Navigation]);

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
  data() {
    return {
      isMobile: false,
      userInput: "",
      swiperModules: [Navigation],
      swiperInstance: null,
      swiperInstance1: null,
      isLastSlide: false,
    }
  },
  mounted() {
    if (window.innerWidth < 1024) {
      this.isMobile = true;
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const onSwiper1 = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange1 = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    search() {
      this.$router.push("/search-result");
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    onSwiper1(swiper) {
      this.swiperInstance1 = swiper;
    },
    goToPrevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    goToPrevSlide1() {
      if (this.swiperInstance1) {
        this.swiperInstance1.slidePrev();
      }
    },
    goToNextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    goToNextSlide1() {
      if (this.swiperInstance1) {
        this.swiperInstance1.slideNext();
      }
    },
    onSlideChange() {
      if (this.swiperInstance) {
        this.isLastSlide = this.swiperInstance.isEnd; // Check if it's the last slide
      }
    },
    onSlideChange1() {
      if (this.swiperInstance1) {
        this.isLastSlide = this.swiperInstance1.isEnd; // Check if it's the last slide
      }
    },
  }
};
</script>