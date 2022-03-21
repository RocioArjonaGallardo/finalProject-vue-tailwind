<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import Header from './components/AppHeader.vue';
import { StoreToRef } from "pinia";
import { UserSignStore } from './store/sign';

const main = UserSignStore();


</script>

<template>
<div>
  <Header />
  <SignUp />
</div>
 
</template>

<style>

</style>
