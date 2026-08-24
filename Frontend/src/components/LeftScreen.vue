<script setup lang="ts">
import './screenStyle.css' 

import { ref } from 'vue'
import { ButtonForCursor } from './ButtonForCursor'

const screenRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)

ButtonForCursor(screenRef, buttonRef)

const goToSite = () => {
    window.open("https://kulaginbrand.ru/", '_blank')
}

const isHidden = ref(false)

</script>

<template>
    <div class="screen" ref="screenRef">

        <header class="header">
            <h1>Сайт <span class="accent">студии</span> <br>игоря кулагина</h1>    
            
            <p>Симбиоз талантливых и неординарных личностей, 
            <br>создающих нечто более, чем просто продукт
            </p>

        </header>

        <main class="main">

            <button 
            ref="buttonRef" 
            class="button-light"
            @mouseenter="isHidden=true"
            @mouseleave="isHidden=false"
            @click="goToSite">
                <span v-if="isHidden">
                    <svg xmlns="http://w3.org" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </span>
                <span v-else>открыть сайт</span>
            </button>

        </main>
        
        <footer class="footer">

            <div class="vidio-block">
                <img src="../assets/Навбар.png" alt="Навбар"/>
                
                <!-- autoplay - автовоспроизведение, muted - без звука, loop - зацикленность -->
                <!-- preload="auto" пытается сначала загрузить видио -->
                <!-- playsinline для ios и для мобилок -->
                <video 
                autoplay 
                muted 
                preload="auto" 
                loop
                playsinline>
                <source src="../assets/studio.mp4" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
        
        </footer>
        
    </div>
</template>