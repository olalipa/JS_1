const isPayingVAT = true;
const VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
const monthlyIncome = 3500;

if (isPayingVAT) {
    taxToPay = monthlyIncome * (VATRateInPoland + incomeTaxRate);
}

console.log(taxToPay);