import { UniversalNavigation } from './interface';
import { UniversalNavigationForConnectedReactRouter } from './UniversalNavigationForConnectedReactRouter';
import { UniversalNavigationForRectNavigation } from './UniversalNavigationForReactNavigation';

/**
 * Configuration of platform being used for UniversalNavigation.
 */
export class UniversalNavigationConfig {
    private generateNavigation: (props: any) => UniversalNavigation;

    constructor() {
        // Default to passing through as per react-navigation.
        this.generateNavigation = (props: any) => {
            return new UniversalNavigationForRectNavigation(props);
        };
    }

    // Returns an object implementing UniversalNavigation for the configured platform.
    getNavigation(props: any) {
        return this.generateNavigation(props);
    }

    // Configure UniversalNavigation to use connected-react-router.
    useConnectedReactRouter(dispatch: (action: any) => any, goBack: () => any, push: (path: string, state?: any) => any) {
        this.generateNavigation = (props: any) => {
            return new UniversalNavigationForConnectedReactRouter(props, { dispatch, goBack, push });
        };
    }

    // Configure UniversalNavigation to use react-navigation (for react-native).
    // NOTE this is the default if nothing else is configured.
    useReactNavigation() {
        this.generateNavigation = (props: any) => {
            return new UniversalNavigationForRectNavigation(props);
        };
    }
}

export const universalNavigation = new UniversalNavigationConfig();
