import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = (): JSX.Element => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
