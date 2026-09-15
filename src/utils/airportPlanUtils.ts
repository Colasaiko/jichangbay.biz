export const getLowestMonthlyPlan = (airport: any) => {
  if (!airport.plans || airport.plans.length === 0) return null;
  const monthlyPlans = airport.plans.filter((p: any) => p.monthly !== null && p.monthly !== undefined);
  if (monthlyPlans.length === 0) return null;
  return monthlyPlans.reduce((min: any, p: any) => p.monthly < min.monthly ? p : min, monthlyPlans[0]);
};

export const getLowestQuarterlyPlan = (airport: any) => {
  if (!airport.plans || airport.plans.length === 0) return null;
  const qtPlans = airport.plans.filter((p: any) => p.quarterly !== null && p.quarterly !== undefined);
  if (qtPlans.length === 0) return null;
  return qtPlans.reduce((min: any, p: any) => p.quarterly < min.quarterly ? p : min, qtPlans[0]);
};

export const getLowestAnnualPlan = (airport: any) => {
  if (!airport.plans || airport.plans.length === 0) return null;
  const anPlans = airport.plans.filter((p: any) => p.annual !== null && p.annual !== undefined);
  if (anPlans.length === 0) return null;
  return anPlans.reduce((min: any, p: any) => p.annual < min.annual ? p : min, anPlans[0]);
};

export const getLowestDirectPayment = (airport: any) => {
  if (!airport.plans || airport.plans.length === 0) return null;
  let minCost = Infinity;
  let minPlan = null;
  let cycle = '';
  
  airport.plans.forEach((p: any) => {
    if (p.monthly !== null && p.monthly !== undefined && p.monthly < minCost) {
      minCost = p.monthly; minPlan = p; cycle = '月付';
    } else if (p.quarterly !== null && p.quarterly !== undefined && p.quarterly < minCost) {
      minCost = p.quarterly; minPlan = p; cycle = '季付';
    } else if (p.semiannual !== null && p.semiannual !== undefined && p.semiannual < minCost) {
      minCost = p.semiannual; minPlan = p; cycle = '半年付';
    } else if (p.annual !== null && p.annual !== undefined && p.annual < minCost) {
      minCost = p.annual; minPlan = p; cycle = '年付';
    } else if (p.oneTime !== null && p.oneTime !== undefined && p.oneTime < minCost) {
      minCost = p.oneTime; minPlan = p; cycle = '一次性';
    }
  });
  
  return minPlan ? { plan: minPlan, cost: minCost, cycle } : null;
};
