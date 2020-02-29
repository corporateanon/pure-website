import { Provider, SFC } from 'react';

type ProviderConfig<T> = [Provider<T>, { value: T }];
type ProviderConfigsList = Array<ProviderConfig<any>>;

interface MultiProviderProps {
    providers: ProviderConfigsList;
}

const MultiProvider: SFC<MultiProviderProps> = ({ providers, children }) => {
    return (
        <>
            {providers.reduce((node, [Provider, providerProps]) => {
                return <Provider {...providerProps}>{node}</Provider>;
            }, children)}
        </>
    );
};

export default MultiProvider;
