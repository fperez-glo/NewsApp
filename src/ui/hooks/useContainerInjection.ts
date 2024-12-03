import React from "react"
import { AwilixContext } from "../context/DIProvider"
import { ContainerType } from "../../config/di"

export const useContainerInjection = <T>(identifier: ContainerType) => {
	const { container } = React.useContext(AwilixContext)
	if (!container) {
		throw new Error("Container not found")
	}
	return container.resolve<T>(identifier)
}
