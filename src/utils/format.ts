// currencyFormatter.format(2500); // currencyFormatter usage example
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
