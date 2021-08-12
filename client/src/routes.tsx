import { Suspense } from "react"
import { Switch,BrowserRouter as Router,Route } from "react-router-dom"
import PrivateRoute from "./auth/PrivateRoute"
import Signin from "./auth/signin"
import Home from "./pages/Home"

const Routes = () => {
    return (
        <Router>
            <Suspense fallback={<h1>Loading</h1>}>
                <Switch>
                    <Route exact path="/" component={Signin}/>
                    <PrivateRoute exact path="/home" component={Home} />
                </Switch>
            </Suspense>

        </Router>
    )
}
export default Routes
