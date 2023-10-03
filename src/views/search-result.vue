<template>
    <div dir="rtl" class="mb-[88px]">
  
      <!-- <aside class="h-screen w-auto border-l-2 fixed top-[85px] px-8 pl-24 py-20">
        <h2 class="text-[32px] text-[#383838] font-normal px-5">الأقسام</h2>
        <img src="../assets/yellowline180.png" alt="">
        <div class="leading-loose text-[20px] text-[#383838] px-5 py-2">
          <a href="" class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300">
            أدب
          </a> <br>
          <a href="" class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300">
            فلسفة
          </a> <br>
          <a href="" class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300">
            لغة
          </a> <br>
          <a href="" class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300">
            موسيقي
          </a> <br>
  
          <a href="" class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300">
            فن
          </a>
  
        </div>
  
      </aside> -->
  
      <div class="container px-12">
        <div class="grid grid-cols-6">
          <!-- side bar -->

          <nav v-if="isMobile == true" aria-label="Page navigation example">
        <ul class="list-style-none flex justify-start px-12 py-8">
          <li>
            <a
              class="pointer-events-none relative block rounded bg-[#EEEEEE] text-[#383838] min-w-[68px] min-h-[37px] text-center text-base px-3 py-1.5 transition-all duration-300"
              >فن</a
            >
          </li>
          <li class="px-1">
            <a
              class="pointer-events-none relative block rounded bg-[#EEEEEE] text-[#383838] min-w-[150px] min-h-[37px] text-center text-base px-3 py-1.5 transition-all duration-300"
              >موسيقي</a
            >
          </li>
          <li class="">
            <a
              class="pointer-events-none relative block rounded bg-[#EEEEEE] text-[#383838] min-w-[68px] min-h-[37px] text-center text-base px-3 py-1.5 hover:bg-[#FFFFFF] hover:text-[#FECE2F] transition-all duration-300"
              >لغة</a
            >
          </li>
          <li class="px-1">
            <a
              class="pointer-events-none relative block rounded bg-[#EEEEEE] text-[#383838] min-w-[128px] min-h-[37px] text-center text-base px-3 py-1.5 hover:bg-[#FFFFFF] hover:text-[#FECE2F] transition-all duration-300"
              >فلسفة</a
            >
          </li>
          <li class="">
            <a
              class="pointer-events-none relative block rounded bg-[#EEEEEE] text-[#383838] min-w-[68px] min-h-[37px] text-center text-base px-3 py-1.5 hover:bg-[#FFFFFF] hover:text-[#FECE2F] transition-all duration-300"
              >أدب</a
            >
          </li>

  
          <li class="px-1">
            <div class="">
              <a
                class=" text-[#FECE2F] text-center text-base relative block border-[#FECE2F] rounded-sm min-w-[87px] min-h-[37px] bg-[#FFFFFF]   px-3 py-1.5"
                href="#!"
                >الكل</a
              >

            </div>
          </li>
        </ul>
      </nav>

          <!-- <swiper v-show="isMobile" class="pt-4 px-2" :navigation="true" :slides-per-view="7" space-between="5">
            <swiper-slide>
              <div class="min-w-[68px] min-h-[37px] bg-[#EEEEEE] rounded-sm">
                <h1 class="text-[#383838] text-center text-base pt-1">فن</h1>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="min-w-[150px] min-h-[37px] bg-[#EEEEEE] rounded-sm">
                <h1 class="text-[#383838] text-center text-base pt-1">موسيقي</h1>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="min-w-[68px] min-h-[37px] bg-[#EEEEEE] rounded-sm">
                <h1 class="text-[#383838] text-center text-base pt-1">لغة</h1>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="min-w-[128px] min-h-[37px] bg-[#EEEEEE] rounded-sm">
                <h1 class="text-[#383838] text-center text-base pt-1">فلسفة</h1>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="min-w-[87px] min-h-[37px] bg-[#EEEEEE] rounded-sm">
                <h1 class="text-[#383838] text-center text-base pt-1">أدب</h1>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="min-w-[87px] min-h-[37px] bg-[#EEEEEE] rounded-sm">
                <h1 class="text-[#383838] text-center text-base pt-1">أدب</h1>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="min-w-[87px] min-h-[37px] bg-[#FFFFFF] border-[#FECE2F] rounded-sm">
                <h1 class="text-[#FECE2F] text-center text-base pt-1">الكل</h1>
              </div>
            </swiper-slide>

          </swiper> -->


          <div v-if="isMobile == false" class=" col-span-1 py-32">
            <div class="border-l-2 h-96">
              <h2 class="text-[32px] text-[#383838] font-normal pr-5">الأقسام</h2>
              <img src="../assets/yellowline180.png" alt="" />
              <div class="leading-loose text-[20px] text-[#383838] pr-5 py-2">
                <a
                  href=""
                  class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300"
                >
                  أدب
                </a>
                <br />
                <a
                  href=""
                  class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300"
                >
                  فلسفة
                </a>
                <br />
                <a
                  href=""
                  class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300"
                >
                  لغة
                </a>
                <br />
                <a
                  href=""
                  class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300"
                >
                  موسيقي
                </a>
                <br />
  
                <a
                  href=""
                  class="hover:text-[#FECE2F] hover:animate-fade-in hover:duration-300"
                >
                  فن
                </a>
              </div>
            </div>
          </div>
  
          <!-- search results -->
          <div class="col-span-5 lg:pr-44 -mx-24 pt-12 lg:pt-0">
            <h1 class="text-[#383838] text-[32px] py-10">
              نتائج البحث عن : قرائة
            </h1>
            <div class="grid grid-rows-4">
              <!-- paragraph 1 -->
              <div class="row-span-1">
                <div class="grid grid-cols-2 gap-x-5">
                  <div>
                    <router-link to="/article">
                      <img
                      src="../assets/Rectangle11.png"
                      alt=""
                      class="w-[480px] h-[277px]"
                      />
                    </router-link>
                    </div>
  
                  <div class="">
                    <p class="text-[#383838] text-[16px] text-opacity-50 text-sm">
                      <img
                        src="../assets/Line2.png"
                        alt=""
                        class="inline-block pl-2"
                      />
                      كتب بواسطة : أحمد السيد
                    </p>
  
                    <h1 class="text-[36px] pt-5 ">فوائد القراءة اليومية</h1>
                    <p v-if="isMobile == false"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal "
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                      القراءة <br />
                      اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير
                      الإبداعي. في هذا <br />
                      المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                      <br />
                      إيجابي على حياتنا.
                    </p>

                    <p v-if="isMobile == true"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.
                    </p>
  
                    <p class="text-xs text-[#38383880] text-opacity-50 lg:py-7">
                      2 فبراير
                      <img
                        src="../assets/Ellipse1.png"
                        class="inline-block"
                        alt=""
                      />
                      5 دقائق قراءة
                      <span
                        class="lg:mx-96 mx-64 text-base text-[#5165FD] text-opacity-100"
                        >أدب</span
                      >
                    </p>
                  </div>
                </div>
              </div>
  
              <!-- paragraph 2 -->
  
              <div class="row-span-1">
                <div class="grid grid-cols-2 gap-x-5">
                  <div>
                    <img
                      src="../assets/Rectangle3.png"
                      alt=""
                      class="w-[480px] h-[277px]"
                    />
                  </div>
  
                  <div class="">
                    <p class="text-[#383838] text-[16px] text-opacity-50 text-sm">
                      <img
                        src="../assets/Line2.png"
                        alt=""
                        class="inline-block pl-2"
                      />
                      كتب بواسطة : أحمد السيد
                    </p>
  
                    <h1 class="text-[36px] pt-5 ">فوائد القراءة اليومية</h1>
                    <p v-if="isMobile == false"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                      القراءة <br />
                      اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير
                      الإبداعي. في هذا <br />
                      المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                      <br />
                      إيجابي على حياتنا.
                    </p>

                    <p v-if="isMobile == true"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.
                    </p>
  
                    <p class="text-xs text-[#38383880] text-opacity-50 py-7">
                      2 فبراير
                      <img
                        src="../assets/Ellipse1.png"
                        class="inline-block"
                        alt=""
                      />
                      5 دقائق قراءة
                      <span
                        class="lg:mx-96 mx-64 text-base text-[#EED600] text-opacity-100"
                        >فن</span
                      >
                    </p>
                  </div>
                </div>
              </div>
  
              <!-- paragraph 3 -->
  
              <div class="row-span-1">
                <div class="grid grid-cols-2 gap-x-5">
                  <div>
                    <img
                      src="../assets/Rectangle4.png"
                      alt=""
                      class="w-[480px] h-[277px]"
                    />
                  </div>
  
                  <div class="">
                    <p class="text-[#383838] text-[16px] text-opacity-50 text-sm">
                      <img
                        src="../assets/Line2.png"
                        alt=""
                        class="inline-block pl-2"
                      />
                      كتب بواسطة : أحمد السيد
                    </p>
  
                    <h1 class="text-[36px] pt-5">فوائد القراءة اليومية</h1>
                    <p v-if="isMobile == false"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                      القراءة <br />
                      اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير
                      الإبداعي. في هذا <br />
                      المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                      <br />
                      إيجابي على حياتنا.
                    </p>

                    <p v-if="isMobile == true"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.
                    </p>
  
                    <p class="text-xs text-[#38383880] text-opacity-50 py-7">
                      2 فبراير
                      <img
                        src="../assets/Ellipse1.png"
                        class="inline-block"
                        alt=""
                      />
                      5 دقائق قراءة
                      <span
                        class="mx-60 lg:mx-[380px] text-base text-[#ED0287] text-opacity-100"
                        >فلسفة</span
                      >
                    </p>
                  </div>
                </div>
              </div>
  
              <!-- paragraph 4 -->
  
              <div class="row-span-1 py-3 lg:py-0">
                <div class="grid grid-cols-2 gap-x-5">
                  <div>
                    <img
                      src="../assets/Rectangle5.png"
                      alt=""
                      class="w-[480px] h-[277px]"
                    />
                  </div>
  
                  <div class="">
                    <p class="text-[#383838] text-[16px] text-opacity-50 text-sm">
                      <img
                        src="../assets/Line2.png"
                        alt=""
                        class="inline-block pl-2"
                      />
                      كتب بواسطة : أحمد السيد
                    </p>
  
                    <h1 class="text-[36px] pt-5">فوائد القراءة اليومية</h1>
                    <p v-if="isMobile == false"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                      القراءة <br />
                      اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير
                      الإبداعي. في هذا <br />
                      المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل
                      <br />
                      إيجابي على حياتنا.
                    </p>

                    <p v-if="isMobile == true"
                      class="text-[#383838] text-[20px] text-opacity-50 text-sm py-5 leading-normal"
                    >
                      القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.
                    </p>
  
                    <p class="text-xs text-[#38383880] text-opacity-50 py-7">
                      2 فبراير
                      <img
                        src="../assets/Ellipse1.png"
                        class="inline-block"
                        alt=""
                      />
                      5 دقائق قراءة
                      <span
                        class="lg:mx-96 mx-64 text-base text-[#5165FD] text-opacity-100"
                        >أدب</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex justify-end px-32 py-8">
          <li>
            <a
              class="pointer-events-none relative block rounded bg-[#5165FD] border text-[#FFFFFF] px-3 py-1.5 text-sm transition-all duration-300"
              >التالي</a
            >
          </li>
          <li class="px-1">
            <a
              class="relative block rounded bg-transparent border px-3 py-1.5 text-[13px] font-semibold text-[#333333] transition-all duration-300 hover:bg-[#F1F1F1]"
              href="#!"
              >10</a
            >
          </li>
          <li class="">
            <p
              class="relative block rounded bg-transparent px-3 py-1.5 text-[13px] font-semibold text-[#333333]"
            >
              ...
            </p>
          </li>
          <li class="px-1">
            <a
              class="relative block rounded bg-transparent border px-3 py-1.5 text-[13px] font-semibold text-[#333333] transition-all duration-300 hover:bg-[#F1F1F1]"
              href="#!"
              >3</a
            >
          </li>
          <li class="px-1">
            <a
              class="relative block rounded bg-transparent border px-3 py-1.5 text-[13px] font-semibold text-[#333333] transition-all duration-300 hover:bg-[#F1F1F1]"
              href="#!"
              >2</a
            >
          </li>
          <li aria-current="page">
            <a
              class="relative block rounded bg-[#5165FD] border px-3 py-1.5 text-[13px] font-semibold text-[#FFFFFF] transition-all duration-300"
              href="#!"
              >1
              <span
                class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                >(current)</span
              >
            </a>
          </li>
  
          <li class="px-1">
            <a
              class="relative block rounded bg-[#EBEBEB82] px-3 py-1.5 text-[13px] font-semibold text-[#5165FD]"
              href="#!"
              >السابق</a
            >
          </li>
        </ul>
      </nav>
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

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: 'search-result',
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
  },
  data (){
    return {
      isMobile: false,
      userInput: "",
    }
  },
  mounted (){
    if (window.innerWidth < 768){
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
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    search() {
      this.$router.push("/search-result");
    }

  }
};
</script>
  