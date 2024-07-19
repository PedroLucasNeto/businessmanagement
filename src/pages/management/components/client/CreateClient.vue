<template>
  <div class="p-4 w-full mx-auto flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold mb-4">Create Client</h1>
    <form @submit.prevent="submitForm" class="space-y-4 w-8/12">
      <div>
        <label for="name" class="block text-sm font-medium">Nome:</label>
        <input v-model="form.name" type="text" id="name" class="input input-bordered w-full mb-1" />
        <span v-if="v$.name.$error" class="text-error">{{ v$.name.$errors[0].$message }}</span>
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium">Telefone:</label>
        <input
          v-model="form.phone"
          type="text"
          id="phone"
          class="input input-bordered w-full mb-1"
        />
      </div>
      <div>
        <label for="dateOfBirthString" class="block text-sm font-medium">Data de Nascimento:</label>
        <input
          v-model="form.dateOfBirthString"
          type="text"
          id="dateOfBirthString"
          class="input input-bordered w-full mb-1"
        />
      </div>
      <div>
        <label for="instagram" class="block text-sm font-medium">Instagram:</label>
        <input
          v-model="form.instagram"
          type="text"
          id="instagram"
          class="input input-bordered w-full mb-1"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium">Email:</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="input input-bordered w-full mb-1"
        />
      </div>
      <div>
        <label for="notes" class="block text-sm font-medium">Notes:</label>
        <textarea
          v-model="form.notes"
          id="notes"
          class="textarea textarea-bordered w-full"
        ></textarea>
      </div>
      <div>
        <label for="occupation" class="block text-sm font-medium">Occupation:</label>
        <input
          v-model="form.occupation"
          type="text"
          id="occupation"
          class="input input-bordered w-full mb-1"
        />
      </div>
      <div class="flex items-center">
        <label for="favorite" class="block text-sm font-medium">Favorite:</label>
        <input v-model="form.favorite" type="checkbox" id="favorite" class="checkbox ml-2" />
      </div>
      <div class="flex items-center">
        <label for="status" class="block text-sm font-medium">Status:</label>
        <input v-model="form.status" type="checkbox" id="status" class="checkbox ml-2" />
      </div>
      <button type="submit" class="btn btn-success text-neutral-100 w-full">Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@/translations/i18n-validators'

const form = ref({
  id: null,
  name: '',
  phone: '',
  dateOfBirthString: '',
  instagram: '',
  email: '',
  notes: '',
  occupation: '',
  favorite: false,
  status: false
})

const rules = {
  name: { required, minLength: minLength(3) },
  phone: { required },
  dateOfBirthString: { required },
  email: { email }
}

const v$ = useVuelidate(rules, form)

function submitForm() {
  v$.value.$touch()
  console.log(form.value)
  if (v$.value.$invalid) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
}
</script>
