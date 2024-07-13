<template>
<!-- create a retrieve visualization for client data, it is for a specific client no all of them -->
<div class="flex flex-col items-center justify-center h-full w-full">
    <div class="w-full">
        
        <div class="flex flex-col items-center justify-center gap-4">
            <h1 class="text-2xl font-bold">Dados do Cliente</h1>
            <div class="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden max-w-2xl border border-gray-200">
                <div class="w-full p-4">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label for="name">Nome</label>
                            <input type="text" id="name" class="input input-bordered" v-model="client.name" :disabled="!isEditable"  />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="input input-bordered" v-model="client.email" :disabled="!isEditable" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="phone">Telefone</label>
                            <input type="tel" id="phone" class="input input-bordered" v-model="client.phone" :disabled="!isEditable" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="dateOfBirth">Data de Nascimento</label>
                            <input type="date" id="dateOfBirth" class="input input-bordered" v-model="client.dateOfBirth" :disabled="!isEditable" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="occupation">Ocupação</label>
                            <input type="text" id="occupation" class="input input-bordered" v-model="client.occupation" :disabled="!isEditable" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="instagram">Instagram</label>
                            <input type="text" id="instagram" class="input input-bordered" v-model="client.instagram" :disabled="!isEditable" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center gap-4">
            <button v-show="isEditable" class="btn btn-success text-white" @click="save">
              Salvar
            </button>
            <button class="btn btn-primary" @click="toggleEdit">
                {{ isEditable ? 'Cancelar' : 'Editar' }}
            </button>
        </div>
        </div>
        
    </div>
</div>

</template>

<script setup>
import { onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import clientService from '@/api/services/clientService';
const route = useRoute();
const id = route.params.id;

const client = ref({});
const isEditable = ref(false);

async function getClient() {
    try {
        const clientFromDb = await clientService.getClientById(id);
        if (!clientFromDb) return;
        client.value = clientFromDb;
    } catch (error) {
        console.log(error);
    }
}

async function save(){
    try {
        await clientService.updateClient(client.value);
        getClient();
    } catch (error) {
        console.log(error);
    }
}

const toggleEdit = () => {
    if (isEditable.value) {
        getClient();
    }
    isEditable.value = !isEditable.value;
}

onMounted(() => {
    getClient();
})

</script>