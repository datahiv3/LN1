export const useKeyWithClickEvents = (handler: (event: React.SyntheticEvent) => void, key = "Escape") => {
  return {
    onClick: handler,
    onKeyDown: (event: React.KeyboardEvent) => {
      if (event.key === key) {
        handler(event);
      }
    },
    tabIndex: 0,
  };
};
