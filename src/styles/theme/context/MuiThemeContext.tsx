'use client'

import React, { FC, PropsWithChildren, createContext, useContext } from 'react'

import { VoidReturn } from '@/types/VoidReturn.type'

import { PaletteMode, createTheme } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline'
import { Theme, ThemeProvider } from '@mui/material/styles'

import EmotionCacheProvider from './EmotionCacheProvider'
import { useMuiTheme } from '../hooks/useMuiTheme.hook'

interface MuiThemeContextType {
  theme: Theme
  mode: PaletteMode
  toggleThemeMode: VoidReturn
}

const MuiThemeContext = createContext<MuiThemeContextType>({
  theme: createTheme(),
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleThemeMode: () => {},
})

export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useMuiTheme()

  return (
    <MuiThemeContext.Provider value={value}>
      <EmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={value.theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </EmotionCacheProvider>
    </MuiThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(MuiThemeContext)
}
