import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";


const App = () => {

    const routes = [
        {
            path: "/",
            element: <h1>Hello World!</h1>
        },
    ];

    const router = createBrowserRouter(routes, {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }
    });

    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
}

export default App;