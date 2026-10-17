import { createContext, useContext, useEffect, useState } from 'react'

const PreferencesContext = createContext(null)

function initialLowData() {
  try {
    const saved = window.localStorage.getItem('nqobizitha-low-data')
    if (saved !== null) return saved === 'true'
    return Boolean(navigator.connection?.saveData)
  } catch {
    return false
  }
}

export function PreferencesProvider({ children }) {
  const [lowData, setLowData] = useState(initialLowData)

  useEffect(() => {
    try { window.localStorage.setItem('nqobizitha-low-data', String(lowData)) } catch { /* Storage may be blocked */ }
  }, [lowData])

  return (
    <PreferencesContext.Provider value={{ lowData, setLowData }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) throw new Error('usePreferences requires PreferencesProvider')
  return context
}
