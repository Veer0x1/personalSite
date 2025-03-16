import { useMemo } from 'react'

export const useFormattedDate = (date: string) => {
  return useMemo(() => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }, [date])
}