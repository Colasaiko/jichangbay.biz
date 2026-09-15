import { getLowestDirectPayment } from './airportPlanUtils';

export const getDisplayPrice = (airport: any) => {
  if (airport.plans && airport.plans.length > 0) {
    let minCost = Infinity;
    let cycle = '';
    airport.plans.forEach((p: any) => {
      if (p.monthly !== null && p.monthly !== undefined && p.monthly < minCost) { minCost = p.monthly; cycle = '月付'; }
      if (p.quarterly !== null && p.quarterly !== undefined && p.quarterly < minCost) { minCost = p.quarterly; cycle = '季付'; }
      if (p.semiannual !== null && p.semiannual !== undefined && p.semiannual < minCost) { minCost = p.semiannual; cycle = '半年付'; }
      if (p.annual !== null && p.annual !== undefined && p.annual < minCost) { minCost = p.annual; cycle = '年付'; }
      if (p.oneTime !== null && p.oneTime !== undefined && p.oneTime < minCost) { minCost = p.oneTime; cycle = '一次性'; }
    });
    
    if (minCost !== Infinity) {
      if (airport.slug === 'bitznet' && minCost === 69.99) return `季付 ¥69.99 起`;
      if (cycle === '月付') return `¥${minCost}/月起`;
      if (cycle === '一次性') return `¥${minCost} 一次性起`;
      return `${cycle} ¥${minCost} 起`;
    }
  }
  return '价格未知';
};

export const getMonthlySortPrice = (airport: any) => {
  if (airport.monthlyStartingPrice !== null) return airport.monthlyStartingPrice;
  return Number.MAX_SAFE_INTEGER;
};

export const getMinTraffic = (airport: any) => {
  if (airport.plans && airport.plans.length > 0) {
    return airport.plans[0].traffic;
  }
  return '未知';
};
