<script setup lang="ts">
  import { ref } from 'vue';

  const transactions = ref([
    {
      id: 1,
      description: 'Aluguel do Apartamento',
      type: 'fixo',
      date: '2023-10-05',
      value: 1200.0,
    },
    {
      id: 1,
      description: 'Aluguel do Apartamento',
      type: 'fixo',
      date: '2023-10-05',
      value: 1200.0,
    },
    {
      id: 1,
      description: 'Aluguel do Apartamento',
      type: 'fixo',
      date: '2023-10-05',
      value: 1200.0,
    },
    {
      id: 2,
      description: 'Netflix',
      type: 'fixo',
      date: '2023-10-10',
      value: 55.9,
    },
    {
      id: 2,
      description: 'Netflix',
      type: 'fixo',
      date: '2023-10-10',
      value: 55.9,
    },
    {
      id: 2,
      description: 'Netflix',
      type: 'fixo',
      date: '2023-10-10',
      value: 55.9,
    },
    {
      id: 3,
      description: 'Jantar no iFood',
      type: 'mensal',
      date: '2023-10-12',
      value: 89.5,
    },
    {
      id: 3,
      description: 'Jantar no iFood',
      type: 'mensal',
      date: '2023-10-12',
      value: 89.5,
    },
    {
      id: 3,
      description: 'Jantar no iFood',
      type: 'mensal',
      date: '2023-10-12',
      value: 89.5,
    },
    {
      id: 4,
      description: 'Combustível',
      type: 'mensal',
      date: '2023-10-15',
      value: 250.0,
    },
    {
      id: 4,
      description: 'Combustível',
      type: 'mensal',
      date: '2023-10-15',
      value: 250.0,
    },
    {
      id: 4,
      description: 'Combustível',
      type: 'mensal',
      date: '2023-10-15',
      value: 250.0,
    },
  ]);

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const getBadgeStyles = (type: string) => {
    switch (type) {
      case 'fixo':
        return 'bg-blue-100 text-blue-700 ring-blue-600/20';
      case 'mensal':
        return 'bg-orange-100 text-orange-700 ring-orange-600/20';
      case 'entrada':
        return 'bg-green-100 text-green-700 ring-green-600/20';
      default:
        return 'bg-gray-100 text-gray-700 ring-gray-600/20';
    }
  };
</script>

<template>
  <div
    class="w-full h-full bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden"
  >
    <div
      class="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center"
    >
      <h3 class="text-gray-900 font-semibold">Extrato Recente</h3>
      <button
        class="text-sm text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
      >
        Filtar
      </button>
      <button
        class="text-sm text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
      >
        Ver tudo
      </button>
    </div>

    <div class="max-h-80 overflow-y-scroll">
      <table class="w-full text-left text-sm text-gray-500">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 font-medium">
          <tr>
            <th scope="col" class="px-6 py-3">Descrição</th>
            <th scope="col" class="px-6 py-3 text-center">Tipo</th>
            <th scope="col" class="px-6 py-3 text-right">Valor</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-if="transactions.length === 0">
            <td colspan="5" class="px-6 py-8 text-center text-gray-400">
              Nenhum lançamento encontrado.
            </td>
          </tr>

          <tr
            v-for="item in transactions"
            :key="item.id"
            class="hover:bg-gray-50 transition-colors duration-150"
          >
            <td class="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ item.description }}
            </td>

            <td class="text-center">
              <span
                class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                :class="getBadgeStyles(item.type)"
              >
                {{ item.type.toUpperCase() }}
              </span>
            </td>

            <td
              class="text-xs font-semibold whitespace-nowrap"
              :class="
                item.type === 'entrada' ? 'text-green-600' : 'text-gray-900'
              "
            >
              {{ item.type === 'entrada' ? '+' : '-' }}
              {{ formatMoney(item.value) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="flex items-center justify-center text-sm p-4 font-semibold whitespace-nowrap border-t border-gray-200"
    >
      Total:
      {{
        formatMoney(transactions.reduce((total, item) => total + item.value, 0))
      }}
    </div>
  </div>
</template>
