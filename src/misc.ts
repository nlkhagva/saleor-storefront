export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  { [K in Keys]-?: Required<Pick<T, K>> }[Keys];

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export function renderCollection<T>(
  collection: T[],
  renderItem: (
    item: T | undefined,
    index: number | undefined,
    collection: T[]
  ) => any,
  renderEmpty?: (collection: T[]) => any
) {
  if (collection === undefined) {
    return renderItem(undefined, undefined, collection);
  }
  if (collection.length === 0) {
    return !renderEmpty ? renderEmpty(collection) : null;
  }
  return collection.map(renderItem);
}

export function decimal(value: string | number) {
  if (typeof value === "string") {
    return value === "" ? null : value;
  }
  return value;
}

export function weight(value: string) {
  return value === "" ? null : parseFloat(value);
}

export const removeDoubleSlashes = (url: string) =>
  url.replace(/([^:]\/)\/+/g, "$1");

export function maybe<T>(exp: () => T): T | undefined;
export function maybe<T>(exp: () => T, d: T): T;
export function maybe(exp: any, d?: any) {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
}

export function only<T>(obj: T, key: keyof T): boolean {
  return Object.keys(obj).every(objKey =>
    objKey === key ? obj[key] !== undefined : obj[key] === undefined
  );
}

export function empty(obj: object): boolean {
  return Object.keys(obj).every(key => obj[key] === undefined);
}
