// @ts-ignore
const AddCuponValue = (
  type: string,
  couponAmount: number,
  checkoutAmount: number,
  plan: boolean = false,
  time_curse: number = 12
) => {
  let discont_amount: number = 0;

  switch (type) {
    case 'value':
      discont_amount = checkoutAmount / 100 - couponAmount;

      if (plan) {
        discont_amount /= time_curse;
      }

      break;
    case 'percentage':
      discont_amount = +parseFloat(
        `${((1 - couponAmount / 100) * checkoutAmount) / 100}`
      ).toFixed(2);

      if (plan) {
        discont_amount /= time_curse;
      }

      break;
    default:
      break;
  }

  return discont_amount;
};

export { AddCuponValue };
