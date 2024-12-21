import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./wrappers/Layout";
import DashboardLayout from "./wrappers/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import usersLoader from "./loaders/unit/usersLoader";


const App = () => {

    const routes = [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "register",
                    element: <Register />
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "dashboard",
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <Dashboard />
                        },
                        {
                            path: "users",
                            element: <Users />,
                            loader: usersLoader,
                            hydrateFallbackElement: <div>Loading...</div>
                        },
                        {
                            path: "settings",
                            element: <Settings />
                        }
                    ]
                }
            ]
        }
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