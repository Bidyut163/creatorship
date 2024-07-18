import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../../layouts/common/spinner/Spinner';

const Dashboard = ({
    getCurrentProfile,
    profile: { profile, loading },
    auth: { user, userType },
}) => {
    const d = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let day = d.getDate();

    let date = `${day} ${month}, ${year}`;

    useEffect(() => {
        getCurrentProfile();
    }, []);

    if (loading) return <Spinner />;

    if (!loading && !profile)
        return (
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-sm-12 mb-4 mb-xl-0">
                        <h4 class="font-weight-bold text-dark">
                            Hi, welcome back!
                        </h4>
                        <p class="font-weight-normal mb-2 text-muted">{date}</p>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-xl-4 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    {userType === 'BUSINESS' ? (
                                        <img
                                            src={require('../../assets/admin/images/faces/business.png')}
                                            alt="image"
                                            class="rounded-circle"
                                            width="150"
                                        />
                                    ) : (
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt="Admin"
                                            class="rounded-circle"
                                            width="150"
                                        />
                                    )}

                                    <div class="mt-3">
                                        <h4>{user.fullname}</h4>
                                        <p class="text-muted mb-1">
                                            {userType}
                                        </p>
                                        <p class="text-muted font-size-sm">
                                            Bay Area, San Francisco, CA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-8 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <p>Please Update your profile</p>
                                {userType === 'CREATOR' ? (
                                    <Link
                                        to="/admin/creator/create-profile"
                                        type="button"
                                        className="btn btn-info font-weight-bold"
                                    >
                                        + Update Profile
                                    </Link>
                                ) : (
                                    <Link
                                        to="/admin/business/create-profile"
                                        type="button"
                                        className="btn btn-info font-weight-bold"
                                    >
                                        + Update Profile
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div class="content-wrapper">
            <div class="row">
                <div class="col-sm-12 mb-4 mb-xl-0">
                    <h4 class="font-weight-bold text-dark">
                        Hi, welcome back!
                    </h4>
                    <p class="font-weight-normal mb-2 text-muted">{date}</p>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-xl-4 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                {userType === 'BUSINESS' ? (
                                    <img
                                        src={require('../../assets/admin/images/faces/business.png')}
                                        alt="image"
                                        class="rounded-circle"
                                        width="150"
                                    />
                                ) : (
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        alt="Admin"
                                        class="rounded-circle"
                                        width="150"
                                    />
                                )}

                                <div class="mt-3">
                                    <h4>{profile.user.fullname}</h4>
                                    <p class="text-muted mb-1">{userType}</p>
                                    <p class="text-muted font-size-sm">
                                        {profile.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Creator Details</h4>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="traffic-source-legend">
                                        <div class="d-flex justify-content-between mb-1 mt-2">
                                            <div class="font-weight-bold">
                                                SOURCE
                                            </div>
                                            <div class="font-weight-bold">
                                                Details
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between legend-label">
                                            <div>
                                                <span class="bg-info"></span>
                                                Company
                                            </div>
                                            <div>
                                                {userType === 'BUSINESS'
                                                    ? profile.user.fullname
                                                    : profile.company}
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between legend-label">
                                            <div>
                                                <span class="bg-info"></span>
                                                Company Website
                                            </div>
                                            <div>{profile.website}</div>
                                        </div>
                                        <div class="d-flex justify-content-between legend-label">
                                            <div>
                                                <span class="bg-info"></span>
                                                Email Address
                                            </div>
                                            <div>{profile.email}</div>
                                        </div>

                                        <div class="d-flex justify-content-between legend-label">
                                            <div>
                                                <span class="bg-info"></span>
                                                Contact Number
                                            </div>
                                            <div>{profile.phone}</div>
                                        </div>

                                        <div class="d-flex justify-content-between legend-label">
                                            <div>
                                                <span class="bg-info"></span>
                                                Content Type
                                            </div>
                                            <div>
                                                {userType === 'BUSINESS'
                                                    ? profile.creatorReq
                                                    : profile.creatorType}
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-between legend-label">
                                            <div>
                                                <span class="bg-info"></span>
                                                Address
                                            </div>
                                            <div>{profile.address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-9 grid-margin-lg-0 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">About {userType}</h4>
                            <div className="mt-3">
                                <h5 className="card-title">About yourself</h5>
                                <p className="mt-3">
                                    {userType === 'BUSINESS'
                                        ? profile.description
                                        : profile.selfDesc}
                                </p>
                            </div>
                            <div className="mt-3">
                                <h5 className="card-title">
                                    {userType === 'BUSINESS' ? (
                                        <Fragment>
                                            How creators can help you
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            How do you help brands
                                        </Fragment>
                                    )}
                                </h5>
                                <p className="mt-3">
                                    {userType === 'BUSINESS'
                                        ? profile.helpReq
                                        : profile.helpDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 grid-margin-lg-0 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-3">Overall rating</h4>
                            <div class="d-flex">
                                <div>
                                    <h4 class="text-dark font-weight-bold mb-2 mr-2">
                                        4.3
                                    </h4>
                                </div>
                                <div>
                                    <select
                                        id="over-all-rating"
                                        name="rating"
                                        autocomplete="off"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <p class="mb-4">Based on 186 reviews</p>
                            <div class="row">
                                <div class="col-sm-2 pr-0">
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                5
                                            </div>
                                        </div>
                                        <div>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 pl-2">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <div class="progress progress-lg mt-1">
                                                <div
                                                    class="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '80%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 p-lg-0">80%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-2 pr-0">
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                4
                                            </div>
                                        </div>
                                        <div>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 pl-2">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <div class="progress progress-lg mt-1">
                                                <div
                                                    class="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '45%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 p-lg-0">45%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-2 pr-0">
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                3
                                            </div>
                                        </div>
                                        <div>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 pl-2">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <div class="progress progress-lg mt-1">
                                                <div
                                                    class="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '30%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 p-lg-0">30%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-2 pr-0">
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                2
                                            </div>
                                        </div>
                                        <div>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 pl-2">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <div class="progress progress-lg mt-1">
                                                <div
                                                    class="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '8%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 p-lg-0">8%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-2 pr-0">
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                5
                                            </div>
                                        </div>
                                        <div>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 pl-2">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <div class="progress progress-lg mt-1">
                                                <div
                                                    class="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '1%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 p-lg-0">1%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p class="mb-2 mt-3 mb-3 text-dark font-weight-bold">
                                        Rating by category
                                    </p>
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                4.3
                                            </div>
                                        </div>
                                        <div class="mr-2">
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                        <div>
                                            <p>Work/Management</p>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div>
                                            <div class="text-dark font-weight-bold mb-2 mr-2">
                                                3.5
                                            </div>
                                        </div>
                                        <div class="mr-2">
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                        <div>
                                            <p>Salary/Culture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { profile: state.profile, auth: state.auth };
};

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
