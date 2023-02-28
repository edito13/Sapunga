export const Money = (money: number) =>
  money
    .toLocaleString("pt-BR", { style: "currency", currency: "AOA" })
    .replace("AOA", "KZ");
