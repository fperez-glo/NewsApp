export interface UseCase<T, U> {
	exec(request: T): Promise<U>
}
