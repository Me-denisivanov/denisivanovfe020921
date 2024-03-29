import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>asd</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
