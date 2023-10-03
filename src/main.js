import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './dist.css'
import { reactive } from 'vue'

createApp(App).use(router).mount('#app')

const state = reactive({
    isLoading: false,
});

const setLoading = (isLoading) => {
    state.isLoading = isLoading;
};

export {state, setLoading };
