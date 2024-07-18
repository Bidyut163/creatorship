import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Landing';

const Landing = () => {
    return (
        <Wrapper>
            <header class="header">
                <div class="header__text-box">
                    <div class="heading-primary u-margin-bottom-small">
                        <h1 class="heading-primary--main">Creatorship</h1>
                        <span class="heading-primary--sub">
                            connect businesses and creators
                        </span>
                    </div>

                    <Link
                        to="/business/signup"
                        class="btn btn--transparent u-margin-right-small"
                    >
                        Business
                    </Link>
                    <Link to="/creator/signup" class="btn btn--white">
                        Creator
                    </Link>
                </div>
            </header>
        </Wrapper>
    );
};

export default Landing;
