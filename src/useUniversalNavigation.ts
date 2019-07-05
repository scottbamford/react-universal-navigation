import { universalNavigation } from './universalNavigation';
import { UniversalNavigation } from './interface';

/**
 * React hook to return a UniversalNavigation for the curret platform from props.
 * @param props
 */
export function useUniversalNavigation(props: any): UniversalNavigation {
    return universalNavigation.getNavigation(props);
}
