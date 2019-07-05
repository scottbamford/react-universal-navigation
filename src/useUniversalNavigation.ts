import { universalNavigation } from './universalNavigation';
import { UniversalNavigation } from './interface';


// Get a navigation object similar to that provided by react-navigation on react-native but suitable for use on the current platform.
// Currently we support react-navigaton (on react-native) and connected-react-router with react-router on web.

/**
 * React hook to return a UniversalNavigation for the curret platform from props.
 * @param props
 */
export function useUniversalNavigation(props: any): UniversalNavigation {
    return universalNavigation.getNavigation(props);
}
