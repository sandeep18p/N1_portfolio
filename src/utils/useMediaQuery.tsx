import { useState, useEffect } from "react";

interface MediaQueryOptions {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
}

export function useMediaQuery(
  query: string,
  options?: MediaQueryOptions
): boolean {
  const [matches, setMatches] = useState<boolean>(
    options?.defaultValue ?? false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    if (options?.initializeWithValue !== false) {
      setMatches(media.matches);
    }

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query, options]);

  return matches;
}
