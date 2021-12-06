export const checkIfObjectEmpty = <T>(obj: T): boolean => {
  if (obj == null) return true;
  return Object.keys(obj).length === 0;
};
