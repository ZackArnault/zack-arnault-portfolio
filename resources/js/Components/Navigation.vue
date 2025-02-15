<script setup>
import { ref } from "vue";
import { Github, Linkedin, Instagram } from 'lucide-vue-next';
const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Experience', path: '#experience' },
    { title: 'Skills', path: '#skills' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
}
</script>

<template>
    <nav class="w-full fixed top-0 shadow-lg py-4 px-6 bg-white lg:bg-transparent z-50">
        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex justify-center items-center space-x-6" :class="{ 'is-active': isMenuOpen }">
            <li class="px-4" v-for="item in navItems" :key="item.title">
                <router-link :to="item.path" @click="closeMenu">
                    {{ item.title }}
                </router-link>
            </li>
            <li class="flex justify-center items-center space-x-8">
                <a href="https://github.com/zackarnault" target="_blank" class="text-gray-700 hover:text-red-500">
                    <Github class="w-6 h-6"/>
                </a>
                <a href="https://www.linkedin.com/in/zack-arnault-1499a9119/" target="_blank" class="text-gray-700 hover:text-red-500">
                    <Linkedin class="w-6 h-6"/>
                </a>
                <a href="https://www.instagram.com/zackarnault" target="_blank" class="text-gray-700 hover:text-red-500">
                    <Instagram class="w-6 h-6"/>
                </a>
            </li>
        </ul>

        <!-- Mobile Navigation Button -->
        <button class="block ml-auto lg:hidden text-3xl text-gray-700" @click="toggleMenu" aria-label="Toggle navigation">
            ☰
        </button>

        <!-- Mobile Full-Screen Menu -->
        <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 lg:hidden z-50">
            <button @click="closeMenu" class="absolute top-6 right-6 text-white text-3xl">
                ✕
            </button>
            <ul class="text-center space-y-8">
                <li v-for="item in navItems" :key="item.title">
                    <router-link :to="item.path" @click="closeMenu" class="text-white text-2xl hover:text-red-500 transition">
                        {{ item.title }}
                    </router-link>
                </li>
                <li class="flex justify-center items-center space-x-8">
                    <a href="https://github.com/zackarnault" target="_blank" class="text-gray-700 hover:text-red-500">
                        <Github class="w-8 h-8 text-white"/>
                    </a>
                    <a href="https://www.linkedin.com/in/zack-arnault-1499a9119/" target="_blank" class="text-gray-700 hover:text-red-500">
                        <Linkedin class="w-8 h-8 text-white"/>
                    </a>
                    <a href="https://www.instagram.com/zackarnault" target="_blank" class="text-gray-700 hover:text-red-500">
                        <Instagram class="w-8 h-8 text-white"/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
