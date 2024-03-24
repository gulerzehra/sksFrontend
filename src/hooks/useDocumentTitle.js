import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} | Künefe SKS`;

    return () => {
      document.title = 'Künefe SKS';
    };
  }, [title]);
}
