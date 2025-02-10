<template>
  <div id="app">
    <Header :contactlist="contactlist" :navigation="navigation" />
    <MainSection :herosection="herosection" />
    <About :herosection="herosection" />
    <Testimonials />
    <Contact :herosection="herosection" />
    <Footer :contactlist="contactlist" :navigation="navigation" :herosection="herosection" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { GetContactsApi, GetNavigationApi, GetHeroSectionApi } from '~/services/home';
const navigation = ref<TNavigation[]>([]);
const herosection = ref<THeroSection[]>([]);
const contactlist = ref<Tcontact[]>([]);
type Tcontact = {
  id: number;
  address: string;
  email: string;
  phoneNumber: string;
  timing: string;
};
type TNavigation = {
  menuName: string;
};
type THeroSection = {
  title: string;
  heading: string;
  description: string;
};
const getContacts = async () => {
  try {
    const response = await GetContactsApi();
    contactlist.value = response.data.value;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    contactlist.value = [];
  }
};
const getNavigation = async () => {
  try {
    const response = await GetNavigationApi();
    navigation.value = response.data.value;
  } catch (error) {
    console.error("Error fetching navigation:", error);
    navigation.value = [];
  }
};
const getHeroSection = async () => {
  try {
    const response = await GetHeroSectionApi();
    herosection.value = response.data.value;
  } catch (error) {
    console.error("Error fetching hero section:", error);
    herosection.value = [];
  }
};
onMounted(() => {
  getContacts();
  getNavigation();
  getHeroSection();
});
</script>
