import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import routes from '../../routes/routes';

import '../../assets/admin/css/style.css';
import '../../assets/admin/vendors/mdi/css/materialdesignicons.min.css';
import '../../assets/admin/vendors/feather/feather.css';
import '../../assets/admin/vendors/base/vendor.bundle.base.css';
import '../../assets/admin/vendors/font-awesome/css/font-awesome.min.css';
// import '../../assets/admin/fonts';
// import '../../assets/admin/images/auth';

const MasterLayout = () => {
    return (
        <div className="container-scroller">
            <Navbar />

            <div className="container-fluid page-body-wrapper">
                <Sidebar />

                <div className="main-panel">
                    <Switch>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            );
                        })}
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>

                    <Footer />
                </div>
                {/* main panel ends */}
            </div>
            {/* body wrapper ends */}
        </div>
        // Container scroller ends
    );
};

export default MasterLayout;
