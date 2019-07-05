/**
 * Common API in the form of an interface that can be used regardless of provider. 
 */
export interface UniversalNavigation {
    /**
     * Returns the value of a paramter got from the route or other routing relating variables or fallback if no value is provided.
     * @param param
     * @param fallback
     */
    getParam<T>(
        param: string,
        fallback: T
    ): T;

    /**
     * Navigate back to the previous screen.
     */
    goBack: () => boolean;

    /**
     * Navigate to a new screen (or back if the scren is already in the stack for platforms that maintain a stack.)
     * @param routeNameOrOptions
     * @param params
     */
    navigate(
        routeNameOrOptions: string,
        params?: any
    ): boolean;

    /**
     * Push a new route onto the stack (or navigate to a new route if the platform doesn't contain a stack.)
     */
    push: (
        routeName: string,
        params?: any
    ) => boolean;
}
