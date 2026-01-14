<script setup lang="ts">
  import { computed } from 'vue';
  import type { ComputedRef } from 'vue';
  import {
    // MoonIcon,
    SunIcon,
  } from 'lucide-vue-next';

  const props = defineProps({
    income: { type: Number, default: 2200.45 },
    fixedExpenses: { type: Number, default: 856.36 },
    monthlyExpenses: { type: Number, default: 445.23 },
  });

  const totalExpenses: ComputedRef<number> = computed(
    () => props.fixedExpenses + props.monthlyExpenses,
  );
  const balance = computed(() => props.income - totalExpenses.value);

  const percentageUsed: ComputedRef<number> = computed(() => {
    const percent = (totalExpenses.value / props.income) * 100;
    return parseInt(Math.min(percent, 100).toFixed(1));
  });

  const statusColor = computed(() => {
    if (percentageUsed.value > 90) return 'bg-red-400';
    if (percentageUsed.value > 70) return 'bg-yellow-400';
    return 'bg-emerald-400';
  });

  const formatMoney = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
</script>

<template>
  <div
    class="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
  >
    <div class="bg-indigo-600 px-6 py-4 text-white">
      <div class="flex items-end justify-between">
        <div>
          <p class="text-indigo-200 text-sm font-medium mb-1">
            Restante do Mês
          </p>
          <h3 class="text-3xl font-bold">{{ formatMoney(balance) }}</h3>
        </div>
        <div class="flex flex-col gap-3 items-end">
          <div class="bg-gray-300/50 rounded-full p-1">
            <component :is="SunIcon" class="w-5 h-5" />
            <!-- <component :is="MoonIcon" class="w-5 h-5" /> -->
          </div>
          <div class="bg-indigo-500/50 p-2 rounded-lg text-xs font-mono">
            {{
              new Date().toLocaleDateString('pt-BR', {
                month: 'short',
                year: 'numeric',
              })
            }}
          </div>
        </div>
      </div>
    </div>

    <div class="p-6">
      <div class="flex justify-between text-sm text-gray-600 mb-2">
        <span>Gasto Total</span>
        <span class="font-bold text-gray-800"
          >{{ percentageUsed }}% da renda</span
        >
      </div>

      <div class="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
        <div
          class="h-full transition-all duration-1000 ease-out rounded-full"
          :class="statusColor"
          :style="{ width: `${percentageUsed}%` }"
        ></div>
      </div>

      <div class="space-y-3">
        <div
          class="flex justify-between items-center text-sm border-b border-gray-100 pb-2"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span class="text-gray-500">Gastos Fixos</span>
          </div>
          <span class="font-medium text-gray-900">{{
            formatMoney(fixedExpenses)
          }}</span>
        </div>

        <div
          class="flex justify-between items-center text-sm border-b border-gray-100 pb-2"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            <span class="text-gray-500">Gastos Variáveis</span>
          </div>
          <span class="font-medium text-gray-900">{{
            formatMoney(monthlyExpenses)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
