// currencyFormatter.format(2500); //==> example, how to use currencyFormatter
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
