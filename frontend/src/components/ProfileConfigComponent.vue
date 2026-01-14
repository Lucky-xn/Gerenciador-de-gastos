<script setup lang="ts">
  import { ref } from 'vue';
  import {
    User,
    Bell,
    ShieldCheck,
    CreditCard,
    LogOut,
    ChevronRight,
    Eye,
    EyeOff,
    Camera,
  } from 'lucide-vue-next';

  const user = ref({
    name: 'Victor Neves',
    email: 'victor.dev@exemplo.com.br',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150',
  });

  const hideValues = ref(false);

  const menuSections = [
    {
      title: 'Conta',
      items: [
        {
          id: 'personal',
          label: 'Dados Pessoais',
          icon: User,
          color: 'text-blue-500',
        },
        {
          id: 'payment',
          label: 'Métodos de Pagamento',
          icon: CreditCard,
          color: 'text-emerald-500',
        },
      ],
    },
    {
      title: 'Preferências',
      items: [
        {
          id: 'notifications',
          label: 'Notificações',
          icon: Bell,
          color: 'text-orange-500',
        },
        {
          id: 'security',
          label: 'Segurança e Senha',
          icon: ShieldCheck,
          color: 'text-purple-500',
        },
      ],
    },
  ];
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <div
      class="bg-linear-to-b from-indigo-700 to-indigo-600 pt-12 pb-20 px-6 rounded-b-[3rem] shadow-lg"
    >
      <div class="flex flex-col items-center">
        <div class="relative">
          <img
            :src="user.avatar"
            alt="Foto do usuário"
            class="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
          <button
            class="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg text-indigo-600 hover:bg-gray-100 transition-colors"
          >
            <Camera class="w-4 h-4" />
          </button>
        </div>

        <h2 class="mt-4 text-xl font-bold text-white">{{ user.name }}</h2>
        <p class="text-indigo-100 text-sm">{{ user.email }}</p>
      </div>
    </div>

    <div class="px-6 -mt-10">
      <div
        class="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between mb-6 border border-gray-100"
      >
        <div class="flex items-center gap-3">
          <div class="p-2 bg-gray-100 rounded-lg">
            <component
              :is="hideValues ? EyeOff : Eye"
              class="w-5 h-5 text-gray-600"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-800">Modo Privacidade</p>
            <p class="text-xs text-gray-500">Ocultar saldos na tela inicial</p>
          </div>
        </div>
        <button
          @click="hideValues = !hideValues"
          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
          :class="hideValues ? 'bg-indigo-600' : 'bg-gray-200'"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 shadow-sm"
            :class="hideValues ? 'translate-x-6' : 'translate-x-1'"
          />
        </button>
      </div>

      <div v-for="section in menuSections" :key="section.title" class="mb-6">
        <h3
          class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2 mb-2"
        >
          {{ section.title }}
        </h3>
        <div
          class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <button
            v-for="item in section.items"
            :key="item.id"
            class="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
          >
            <div class="flex items-center gap-3">
              <component :is="item.icon" :class="['w-5 h-5', item.color]" />
              <span class="text-sm font-medium text-gray-700">{{
                item.label
              }}</span>
            </div>
            <ChevronRight class="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      <button
        class="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl font-semibold hover:bg-red-100 transition-colors border border-red-100"
      >
        <LogOut class="w-5 h-5" />
        Sair da Conta
      </button>
    </div>
  </div>
</template>
