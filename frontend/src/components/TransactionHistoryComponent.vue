<script setup lang="ts">
  import { ref, computed } from 'vue';
  import {
    Search,
    ArrowUpRight,
    ArrowDownLeft,
    ChevronRight,
    CalendarDays,
  } from 'lucide-vue-next';
  import type { ComputedRef } from 'vue';

  const transactions = ref([
    {
      id: 1,
      title: 'Supermercado Continente',
      category: 'Alimentação',
      value: -85.2,
      date: '2024-01-14',
      time: '14:20',
    },
    {
      id: 2,
      title: 'Salário Mensal',
      category: 'Trabalho',
      value: 2500.0,
      date: '2024-01-14',
      time: '09:00',
    },
    {
      id: 3,
      title: 'Uber',
      category: 'Transporte',
      value: -12.5,
      date: '2024-01-13',
      time: '22:15',
    },
    {
      id: 4,
      title: 'Restaurante Sushi',
      category: 'Lazer',
      value: -45.0,
      date: '2024-01-13',
      time: '20:30',
    },
    {
      id: 5,
      title: 'Conta de Luz',
      category: 'Contas Fixas',
      value: -62.15,
      date: '2024-01-10',
      time: '10:00',
    },
  ]);

  const searchQuery = ref('');
  const selectedFilter = ref('Todos');
  const filters = ['Todos', 'Entradas', 'Saídas'];

  const filteredTransactions: ComputedRef = computed(() => {
    return transactions.value.filter((t) => {
      const matchesSearch = t.title
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
      const matchesType =
        selectedFilter.value === 'Todos' ||
        (selectedFilter.value === 'Entradas' && t.value > 0) ||
        (selectedFilter.value === 'Saídas' && t.value < 0);
      return matchesSearch && matchesType;
    });
  });

  const formatDateLabel = (dateStr: string) => {
    const today = new Date().toISOString().split('T')[0];
    if (dateStr === today) return 'Hoje';
    return new Date(dateStr).toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
    });
  };

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(val);
  };
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-28">
    <div class="bg-white px-6 pt-12 pb-6 shadow-sm sticky top-0 z-10">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Extrato</h1>

      <div class="space-y-4">
        <div class="relative">
          <Search
            class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Pesquisar transação..."
            class="w-full bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        <div class="flex gap-2">
          <button
            v-for="f in filters"
            :key="f"
            @click="selectedFilter = f"
            :class="[
              'px-4 py-2 rounded-lg text-xs font-semibold transition-all',
              selectedFilter === f
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-500',
            ]"
          >
            {{ f }}
          </button>
        </div>
      </div>
    </div>

    <div class="px-6 mt-6">
      <div v-if="filteredTransactions.length === 0" class="text-center py-10">
        <p class="text-gray-400">Nenhuma transação encontrada.</p>
      </div>

      <div v-else class="space-y-8">
        <div class="space-y-3">
          <div v-for="(item, index) in filteredTransactions" :key="item.id">
            <h3
              v-if="
                index === 0 ||
                item.date !== filteredTransactions[index - 1].date
              "
              class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 mt-6 flex items-center gap-2"
            >
              <CalendarDays class="w-3 h-3" />
              {{ formatDateLabel(item.date) }}
            </h3>

            <div
              class="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[
                    'p-3 rounded-xl',
                    item.value > 0
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600',
                  ]"
                >
                  <component
                    :is="item.value > 0 ? ArrowDownLeft : ArrowUpRight"
                    class="w-5 h-5"
                  />
                </div>

                <div>
                  <h4 class="font-bold text-gray-800 text-sm leading-tight">
                    {{ item.title }}
                  </h4>
                  <p class="text-xs text-gray-500">
                    {{ item.category }} • {{ item.time }}
                  </p>
                </div>
              </div>

              <div class="text-right">
                <span
                  :class="[
                    'font-bold text-sm',
                    item.value > 0 ? 'text-green-600' : 'text-gray-900',
                  ]"
                >
                  {{ item.value > 0 ? '+' : '' }}{{ formatMoney(item.value) }}
                </span>
                <ChevronRight class="w-4 h-4 text-gray-300 ml-auto mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
