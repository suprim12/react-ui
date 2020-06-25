import { useLayoutEffect } from 'react'
export function useLockBodyScroll(toggle) {
  useLayoutEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'visible'
    return () => (document.body.style.overflow = 'visible')
  }, [toggle])
}
