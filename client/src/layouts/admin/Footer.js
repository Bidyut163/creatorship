import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
                <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
                    Copyright © creatorship.io 2024
                </span>
                <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    {' '}
                    By{' '}
                    <a href="https://www.findbidyut.in/" target="_blank">
                        Bidyut Deka
                    </a>{' '}
                    from findbidyut.in
                </span>
            </div>
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block mt-2">
                Developed By:{' '}
                <a href="https://www.themewagon.com/" target="_blank">
                    Bidyut R. Deka
                </a>
            </span>
        </footer>
    );
};

export default Footer;
