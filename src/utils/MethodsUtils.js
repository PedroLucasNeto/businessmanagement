export const formatNumber = (field ) => {
  if (!field) return 0;
  return parseFloat(field.replace(/\D/g, "")).toFixed(2);
};