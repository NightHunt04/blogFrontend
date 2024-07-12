import { createContext, useContext } from 'react'

export const HeroContext = createContext({
    sidePanel: false,
    toggleSidePanel: () => {},

    isSignUp: false,
    toggleIsSignUp: () => {},

    handleSignUp: () => {}
})

export function useHeroContext() {
    return useContext(HeroContext)
}

export const HeroContextProvider = HeroContext.Provider