// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    validations: {
      required: 'This field is required',
      minLength: 'This field must have at least {min} characters',
      email: 'Invalid email format'
    },
    name: 'Name',
    phone: 'Phone',
    dateOfBirth: 'Date of Birth',
    instagram: 'Instagram',
    email: 'Email',
    notes: 'Notes',
    occupation: 'Occupation',
    favorite: 'Favorite',
    status: 'Status',
    submit: 'Submit'
  },
  pt: {
    validations: {
      required: 'Este campo é obrigatório',
      minLength: 'Este campo deve ter pelo menos {min} caracteres',
      email: 'Formato de email inválido'
    },
    name: 'Nome',
    phone: 'Telefone',
    dateOfBirth: 'Data de Nascimento',
    instagram: 'Instagram',
    email: 'Email',
    notes: 'Notas',
    occupation: 'Ocupação',
    favorite: 'Favorito',
    status: 'Status',
    submit: 'Enviar'
  }
}

export const i18n = createI18n({
  locale: 'pt', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})
