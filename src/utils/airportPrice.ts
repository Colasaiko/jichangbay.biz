export const getDisplayPrice = (airport: any) => {
  if (airport.monthlyStartingPrice !== null) return `¥${airport.monthlyStartingPrice}/月起`;
  if (airport.plans && airport.plans.length > 0) {
    let minQ = Math.min(...airport.plans.map((p: any) => p.quarterly).filter((p: any) => p !== null));
    if (minQ !== Infinity) return `季付 ¥${minQ} 起`;
    let minH = Math.min(...airport.plans.map((p: any) => p.semiannual).filter((p: any) => p !== null));
    if (minH !== Infinity) return `半年付 ¥${minH} 起`;
    let minA = Math.min(...airport.plans.map((p: any) => p.annual).filter((p: any) => p !== null));
    if (minA !== Infinity) return `年付 ¥${minA} 起`;
    let minO = Math.min(...airport.plans.map((p: any) => p.oneTime).filter((p: any) => p !== null));
    if (minO !== Infinity) return `¥${minO} 一次性`;
  }
  return '价格未知';
};

export const getMonthlySortPrice = (airport: any) => {
  if (airport.monthlyStartingPrice !== null) return airport.monthlyStartingPrice;
  // If no monthly price, we should not rank it as 0. 
  // We can convert the lowest plan's total cost to a monthly equivalent for sorting purposes?
  // User explicitly said "可以使用： monthlyStartingPrice ?? Number.MAX_SAFE_INTEGER 用于月付价格排序"
  return Number.MAX_SAFE_INTEGER;
};

export const getMinTraffic = (airport: any) => {
  if (airport.plans && airport.plans.length > 0) {
    return airport.plans[0].traffic;
  }
  return '未知';
};
