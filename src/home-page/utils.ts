/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function attr(defaultVal, attrVal) {
  if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
  if (attrVal === 'true' && typeof defaultVal === 'boolean') return true;
  if (attrVal === 'false' && typeof defaultVal === 'boolean') return false;
  if (isNaN(attrVal) && typeof defaultVal === 'string') return attrVal;
  if (!isNaN(attrVal) && typeof defaultVal === 'number') return +attrVal;
  return defaultVal;
}
