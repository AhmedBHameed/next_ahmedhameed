export const callTryCatch = async (
  fn: () => Promise<any>,
  finallyfn?: () => void
) => {
  try {
    const response = await fn();
    return [null, response];
  } catch (error) {
    return [error, null];
  } finally {
    finallyfn?.();
  }
};
