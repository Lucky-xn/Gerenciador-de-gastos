<script setup lang="ts">
  import { ref } from 'vue';
  import {
    User,
    Mail,
    Phone,
    //   MapPin,
    Calendar,
    Save,
    Edit3,
    ArrowLeft,
  } from 'lucide-vue-next';

  const isEditing = ref(false);

  const userData = ref({
    fullName: 'Eduardo Oliveira',
    email: 'eduardo.dev@exemplo.com.br',
    phone: '(31) 98765-4321',
    birthDate: '1995-08-15',
    city: 'Ipatinga, MG',
  });

  const originalData = { ...userData.value };

  const toggleEdit = () => {
    if (isEditing.value) {
      //  console.log('Dados salvos:', userData.value)
    }
    isEditing.value = !isEditing.value;
  };

  const cancelEdit = () => {
    userData.value = { ...originalData };
    isEditing.value = false;
  };
</script>

<template>
  <div class="min-h-screen bg-white">
    <header
      class="p-6 flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-20"
    >
      <div class="flex items-center gap-4">
        <button
          class="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
        >
          <ArrowLeft class="w-6 h-6" />
        </button>
        <h1 class="text-xl font-bold text-gray-900">Dados Pessoais</h1>
      </div>

      <button
        @click="toggleEdit"
        class="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all"
        :class="
          isEditing
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-indigo-50 text-indigo-600'
        "
      >
        <component :is="isEditing ? Save : Edit3" class="w-4 h-4" />
        {{ isEditing ? 'Salvar' : 'Editar' }}
      </button>
    </header>

    <main class="p-6 space-y-6">
      <div class="flex flex-col items-center mb-8">
        <div class="relative group">
          <div
            class="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden"
          >
            <span class="text-3xl font-bold text-indigo-600">EO</span>
          </div>
          <button
            v-if="isEditing"
            class="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit3 class="w-6 h-6" />
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-1">
          <label class="text-xs font-bold text-gray-400 uppercase ml-1"
            >Nome Completo</label
          >
          <div class="relative">
            <User
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              v-model="userData.fullName"
              :disabled="!isEditing"
              type="text"
              class="w-full pl-12 pr-4 py-4 rounded-2xl border-none text-gray-900 transition-all"
              :class="
                isEditing
                  ? 'bg-gray-50 ring-2 ring-indigo-100'
                  : 'bg-transparent font-medium'
              "
            />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-xs font-bold text-gray-400 uppercase ml-1"
            >E-mail</label
          >
          <div class="relative">
            <Mail
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              v-model="userData.email"
              :disabled="!isEditing"
              type="email"
              class="w-full pl-12 pr-4 py-4 rounded-2xl border-none text-gray-900 transition-all"
              :class="
                isEditing
                  ? 'bg-gray-50 ring-2 ring-indigo-100'
                  : 'bg-transparent font-medium'
              "
            />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-xs font-bold text-gray-400 uppercase ml-1"
            >Telefone</label
          >
          <div class="relative">
            <Phone
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              v-model="userData.phone"
              :disabled="!isEditing"
              type="text"
              class="w-full pl-12 pr-4 py-4 rounded-2xl border-none text-gray-900 transition-all"
              :class="
                isEditing
                  ? 'bg-gray-50 ring-2 ring-indigo-100'
                  : 'bg-transparent font-medium'
              "
            />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-xs font-bold text-gray-400 uppercase ml-1"
            >Data de Nascimento</label
          >
          <div class="relative">
            <Calendar
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              v-model="userData.birthDate"
              :disabled="!isEditing"
              type="date"
              class="w-full pl-12 pr-4 py-4 rounded-2xl border-none text-gray-900 transition-all"
              :class="
                isEditing
                  ? 'bg-gray-50 ring-2 ring-indigo-100'
                  : 'bg-transparent font-medium'
              "
            />
          </div>
        </div>
      </div>

      <button
        v-if="isEditing"
        @click="cancelEdit"
        class="w-full py-4 text-gray-500 font-semibold hover:text-red-500 transition-colors"
      >
        Cancelar Alterações
      </button>
    </main>
  </div>
</template>
