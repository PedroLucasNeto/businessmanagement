// src/utils/validationMessages.js
import { useI18n } from 'vue-i18n'

export function getValidationMessages() {
  const { t } = useI18n()
  return {
    required: t('validation.required'),
    minLength: t('validation.minLength', { min: 3 }),
    email: t('validation.email')
  }
}
