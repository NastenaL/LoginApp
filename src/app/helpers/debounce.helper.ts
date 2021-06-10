const DEBOUNCE_TIME: number = 1000;

export class DebounceHelper {
  // TODO: Add response type
  // TODO: Check debounce from lodash
  public static delay() {
    let timeoutId: number | null = null;

    return {
      init() {
        return new Promise<void>((resolve) => {
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }

          timeoutId = setTimeout(() => {
            resolve();
          }, DEBOUNCE_TIME);
        });
      },
    };
  }
}
