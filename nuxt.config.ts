import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    "@nuxtjs/tailwindcss",
  ],
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: 'kt6xvy3o',
    apiVersion: '2021-10-21', // use a UTC date string
  }
})
