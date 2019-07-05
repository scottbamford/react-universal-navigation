import { UniversalNavigation} from './interface';

/**
 * Options required to connect to the connected-react-router's redux actions and store. 
 */
interface UniversalNavigationForConnectedRouterOptions {
    dispatch: (action: any) => any,
    goBack: () => any,
    push: (route: string, params?: any) => any,
}

/**
 * Provider for UniversalNavigation that uses connected-react-router.
 */
export class UniversalNavigationForConnectedReactRouter implements UniversalNavigation {
    private props: any;
    private options: UniversalNavigationForConnectedRouterOptions;

    constructor(props: any, options: UniversalNavigationForConnectedRouterOptions) {
        this.props = props;
        this.options = options;
    }

    /**
     * Returns the value of a paramter got from the route or other routing relating variables or fallback if no value is provided.
     * 
     * For connected-react-router we check:
     *  1. params of the match (props.match.params)
     *  2. state of the location (props.location.state)
     *  3. Query string values from the location (props.location.search)
     * @param param
     * @param fallback
     */
    getParam<T>(param: string, fallback: T): T {
        // First try the params in the url.
        if (this.props.match && this.props.match.params) {
            let ret = this.props.match.params[param];
            if (ret) {
                return ret;
            }
        }

        // Then try the state.
        if (this.props.location && this.props.location.state) {
            if (this.props.location.state) {
                let ret = this.props.location.state[param];
                if (ret) {
                    return ret;
                }
            }
        }

        // Then the query string.
        if (this.props.location && this.props.location.search) {
            const params: any = new URLSearchParams(this.props.location.search);
            if (params) {
                let ret = params.get(param);
                if (ret) {
                    return ret;
                }
            }
        }

        // Before giving up.
        return fallback;
    }

    /**
     * Navigate back to the previous screen.
     */
    goBack(): boolean {
        this.options.dispatch(this.options.goBack());
        return true;
    }

    /**
     * Navigate to a new screen (or back if the scren is already in the stack for platforms that maintain a stack.)
     * @param routeNameOrOptions
     * @param params
     */
    navigate(routeNameOrOptions: string, params?: any): boolean {
        return this.push(routeNameOrOptions, params);
    }


    /**
     * Push a new route onto the stack (or navigate to a new route if the platform doesn't contain a stack.)
     * @param routeName
     * @param params
     */
    push(routeName: string, params?: any): boolean {
        this.options.dispatch(this.options.push(routeName, params));
        return true
    }
}
