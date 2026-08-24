<script setup lang="ts">
import './screenStyle.css'

import { ref } from 'vue'
import { ButtonForCursor } from './ButtonForCursor'

const screenRef = ref<HTMLElement | null>(null) // реф для экрана
const buttonRef = ref<HTMLElement | null>(null) // реф кнопки

ButtonForCursor(screenRef, buttonRef) // toggle для кнопки

const goToSite = () => {
    window.open('https://kulaginbrand.ru/', '_blank')
}

const isHidden = ref(false)
</script>


<template>
    <div class="screen" ref="screenRef">

        <header class="header" style="display: flex;">
            
            <div>
                <h1><span class="accent">Личный</span> сайт <br>кулагина</h1>    
            
                <p>Мой опыт и знания смогут сократить путь к результатам, 
                <br>экономя несколько лет усилий
                </p>
            </div>
            
            <div class="icons-wrapper">
                <div class="icons-row">
                    <img class="icon--vk" src="../assets/vk-logo.svg" alt="лого вк">
                    <img class="icon--tg" src="../assets/telegram-logo.svg" alt="лого тг">
                </div>
                <div class="icons-row icons-row--shifted">
                    <img class="icon--wa" src="../assets/whatsapp-logo.svg" alt="лого ватсап">
                    <img class="icon--tt" src="../assets/tiktok-logo.svg" alt="лого тт">
                </div>
            </div>

        </header>

        <main class="main">
            <button 
            ref="buttonRef" 
            class="button-red"
            @mouseenter="isHidden=true"
            @mouseleave="isHidden=false"
            @click="goToSite">
                <span v-if="isHidden">
                    <svg xmlns="http://w3.org" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                    </span>
                <span v-else>Познакомиться</span>
            </button>
        </main>

        <footer class="footer">

        <div class="vidio-block">
            <img src="../assets/Навбар.png"/>
            <video 
            autoplay
            muted
            preload="auto"
            loop
            playsinline>
            <source src="../assets/Kulagin.mp4" type="video/mp4">
                Ваш браузер не поддерживает видео
            </video>
        </div>

        </footer>
    </div>
</template>