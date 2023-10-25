'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

import {
  Checklist,
  Home,
  Logout,
  Menu,
  Settings,
  Star,
  Support,
} from '@mui/icons-material'
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

import { ToggleThemeModeButton } from '../buttons/ToggleThemeModeButton'
import { FullPageLoader } from '../loaders/FullPageLoader'

import '@/styles/reset/reset.css'

const LINKS = [
  { text: 'Home', href: '/homepage', icon: Home },
  { text: 'Starred', href: '/', icon: Star },
  { text: 'Tasks', href: '/', icon: Checklist },
]

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: Settings },
  { text: 'Support', icon: Support },
  { text: 'Logout', icon: Logout },
]

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isAppMounted, setIsAppMounted] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleOnDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  useEffect(() => {
    setIsAppMounted(true)
  }, [])
  return (
    <>
      {!isAppMounted ? (
        <FullPageLoader />
      ) : (
        <>
          <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <Menu />
              </IconButton>

              <ToggleThemeModeButton />
            </Toolbar>
          </AppBar>

          <Drawer open={isDrawerOpen} onClose={handleOnDrawerClose}>
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem
                  key={href}
                  disablePadding
                  onClick={handleOnDrawerClose}
                >
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>

          {children}
        </>
      )}
    </>
  )
}
