import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LoginComponent = React.lazy(() => import("./components/LoginForm"));
const Charts = React.lazy(() => import("./components/Charts"));
const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" Component={LoginComponent} />
                    <Route path="/charts" Component={Charts} />
                </Routes>
            </Suspense>
        </Router>
    );
};
export default App;
