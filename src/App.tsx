import React from "react";

const LoginComponent = React.lazy(() => import("./components/LoginForm"));
const Charts = React.lazy(() => import("./components/Charts"));

const App = () => {
    return (
        <>
            <React.Suspense fallback={<div>Loading...</div>}>
                <LoginComponent />
            </React.Suspense>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Charts />
            </React.Suspense>
        </>
    );
};
export default App;
