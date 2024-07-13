export function formatNumber (field){
  if (!field) return 0;
  return parseFloat(field.replace(/\D/g, "")).toFixed(2);
};

export function processValue (type, value) {
  if (!value || !type) return ''
  if (type === 'date') return new Date(value).toLocaleDateString()
  if (type === 'dateTime') return new Date(value).toLocaleString()
  if (type === 'money') return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  if (type === 'hour') return `${value} horas`
  if (type === 'phone') return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
  if (type === 'object') {
    console.log(value)

    return value
  }
  return value
}