import { useState } from 'react';

/**
 * Light/dark theme hook.
 *
 * The initial `.dark` class is applied by a blocking script in index.html
 * (light is the default; dark only when the visitor opted in), so the hook's
 * initial state is read straight from the DOM — no flash, no system-pref guess.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('darkMode', String(next));
      } catch {
        /* ignore storage errors (e.g. private mode) */
      }
      return next;
    });
  };

  return { isDark, toggle };
}
