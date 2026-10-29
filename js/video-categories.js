/* Shared category identity and display rules for the site and CMS. */
((root, factory) => {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PortfolioVideoCategories = api;
})(typeof window === 'undefined' ? globalThis : window, () => {
  'use strict';
  const ALL = '__all_videos__';
  const DEFAULTS = ['动效', '特效', '动画', '其他'].map(label => ({id:label,label}));
  const COLORS = ['red', 'yellow', 'blue', 'green'];
  const LEGACY_COLORS = {'动效':'red','特效':'yellow','动画':'blue','其他':'green'};
  const text = value => typeof value === 'string' ? value.trim() : '';
  function configured(site) {
    const source = Array.isArray(site?.videoCategories) ? site.videoCategories : DEFAULTS;
    const seen = new Set();
    return source.map(row => typeof row === 'string' ? {id:row,label:row} : row || {})
      .map(row => ({id:text(row.id) || text(row.label),label:text(row.label)}))
      .filter(row => row.id && row.label && row.id !== ALL && !seen.has(row.id) && seen.add(row.id));
  }
  function list(site, works = []) {
    const categories = configured(site);
    // Old or externally edited content must remain reachable through a filter.
    for (const work of works) {
      const value = text(work.cat);
      if (value && !categories.some(row => row.id === value || row.label === value)) categories.push({id:value,label:value});
    }
    return categories;
  }
  function find(categories, value) {
    return categories.find(row => row.id === value) || categories.find(row => row.label === value);
  }
  function color(categories, value) {
    const category = find(categories, value);
    return LEGACY_COLORS[category?.id] || COLORS[Math.max(0,categories.indexOf(category)) % COLORS.length];
  }
  function hall(categories, value) {
    let index = categories.indexOf(find(categories,value)) + 1, result = '';
    if (index < 1) return 'A';
    while (index) { index--; result = String.fromCharCode(65 + index % 26) + result; index = Math.floor(index / 26); }
    return result;
  }
  return {ALL, DEFAULTS, configured, list, find, color, hall};
});
