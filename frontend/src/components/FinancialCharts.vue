<script setup lang="ts">
  import {
    BarChart3,
    PieChart as PieIcon,
    ArrowUpRight,
    ArrowDownLeft,
    Calendar,
  } from 'lucide-vue-next';

  import { Bar, Pie } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
  );

  const barData = {
    labels: ['Set', 'Out', 'Nov', 'Dez', 'Jan'],
    datasets: [
      {
        label: 'Gastos (R$)',
        backgroundColor: '#6366f1',
        borderRadius: 8,
        data: [1800, 2100, 1950, 2400, 2200],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { display: false }, x: { grid: { display: false } } },
  };

  const pieData = {
    labels: ['Aluguel', 'Comida', 'Lazer', 'Transporte'],
    datasets: [
      {
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
        data: [1200, 600, 300, 100],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { usePointStyle: true, font: { size: 10 } },
      },
    },
  };
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-28 px-6 pt-12">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Análise Mensal</h1>
      <p class="text-sm text-gray-500">
        Veja como você distribuiu seu dinheiro
      </p>
    </header>

    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 text-green-600 mb-1">
          <ArrowDownLeft class="w-4 h-4" />
          <span class="text-[10px] font-bold uppercase">Entradas</span>
        </div>
        <p class="text-lg font-bold text-gray-900">R$ 5.200</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 text-red-500 mb-1">
          <ArrowUpRight class="w-4 h-4" />
          <span class="text-[10px] font-bold uppercase">Saídas</span>
        </div>
        <p class="text-lg font-bold text-gray-900">R$ 2.450</p>
      </div>
    </div>

    <section
      class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6"
    >
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          <BarChart3 class="w-5 h-5 text-indigo-600" />
          <h2 class="font-bold text-gray-800">Tendência de Gastos</h2>
        </div>
        <Calendar class="w-4 h-4 text-gray-400" />
      </div>
      <div class="h-48">
        <Bar :data="barData" :options="barOptions" />
      </div>
    </section>

    <section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div class="flex items-center gap-2 mb-6">
        <PieIcon class="w-5 h-5 text-emerald-500" />
        <h2 class="font-bold text-gray-800">Gastos por Categoria</h2>
      </div>
      <div class="h-64">
        <Pie :data="pieData" :options="pieOptions" />
      </div>
    </section>
  </div>
</template>
