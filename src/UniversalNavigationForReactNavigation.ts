import { UniversalNavigation } from './interface';

/**
 * Provider for UniversalNavigation that uses react-navigation (e.g. on react-native)
 */
export class UniversalNavigationForRectNavigation implements UniversalNavigation {
    private props: any;

    constructor(props: any) {
        this.props = props;
    }

    /**
     * Returns the value of a paramter got from the route or other routing relating variables or fallback if no value is provided.
     * @param param
     * @param fallback
     */
    getParam<T>(
        param: string,
        fallback?: T
    ): T | undefined {
        return this.props.navigation.getParam(param, fallback);
    }
    
    /**
     * Navigate back to the previous screen.
     */
    goBack(): boolean {
        this.props.navigation.goBack();
        return true;
    }

    /**
     * Navigate to a new screen (or back if the scren is already in the stack for platforms that maintain a stack.)
     * @param routeNameOrOptions
     * @param params
     */
    navigate(
        routeNameOrOptions: string,
        params?: any
    ): boolean {
        return this.props.navigation.navigate(routeNameOrOptions, params);
    }

    /**
     * Push a new route onto the stack (or navigate to a new route if the platform doesn't contain a stack.)
     */
    push(
        routeName: string,
        params?: any
    ): boolean {
        return this.props.navigation.navigate(routeName, params);
    }
}
