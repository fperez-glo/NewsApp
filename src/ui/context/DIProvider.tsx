import React from "react"
import { AwilixContainer } from "awilix"

export const AwilixContext = React.createContext<{ container: AwilixContainer | null }>({ container: null })

type DIProviderProps = {
	container: AwilixContainer
	children: React.ReactNode
}

export const DIProvider = ({ children, container }: DIProviderProps) => {
	return <AwilixContext.Provider value={{ container }}>{children}</AwilixContext.Provider>
}
