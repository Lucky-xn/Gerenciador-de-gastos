<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function navigateTo(to: string) {
    router.push(to);
  }

  const activeTab = ref('dashboard');

  const tabs = [
    { id: 'dashboard', name: 'Início', route: '/Home' },
    { id: 'transactions', name: 'Extrato', route: '/History' },
    { id: 'add', name: '', isSpecial: true },
    { id: 'reports', name: 'Gráficos', route: '/Charts' },
    { id: 'profile', name: 'Perfil', route: '/Profile' },
  ];

  const setActive = (id: string) => {
    activeTab.value = id;
  };
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden"
  >
    <ul
      class="flex justify-between items-center h-15 max-w-md mx-auto relative"
    >
      <li v-for="tab in tabs" :key="tab.id" class="flex-1">
        <button
          v-if="tab.isSpecial"
          @click="setActive(tab.id)"
          class="relative -top-6 flex flex-col items-center justify-center"
        >
          <div
            class="bg-indigo-600 px-4 py-1 text-sm text-white font-semibold rounded-full shadow-lg shadow-indigo-200 active:scale-90 transition-transform border-2 border-white"
          >
            Adicionar
          </div>
        </button>

        <button
          v-else
          @click="[setActive(tab.id), navigateTo(tab.route || '/Home')]"
          class="w-full flex flex-col items-center justify-center py-2 transition-colors duration-200"
          :class="
            activeTab === tab.id
              ? 'text-indigo-600'
              : 'text-gray-400 hover:text-gray-600'
          "
        >
          <span class="text-xs font-medium leading-none">
            {{ tab.name }}
          </span>

          <button
            v-if="activeTab === tab.id"
            class="w-1 h-1 bg-indigo-600 rounded-full mt-1"
          ></button>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>
