import React from 'react';

const TopNavigation = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="some-list some-list-top visible-md">
                    <div>
                        <a href="#">
                            <img src="http://placehold.it/100" />
                            <h6>Some link 1</h6>
                        </a>
                        <a href="#">
                            <img src="http://placehold.it/100" />
                            <h6>Some link 2</h6>
                        </a>
                        <a href="#">
                            <img src="http://placehold.it/100" />
                            <h6>Some link 3</h6>
                        </a>   
                        <a href="#">
                            <img src="http://placehold.it/100" />
                            <h6>Some link 4</h6>
                        </a>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;
