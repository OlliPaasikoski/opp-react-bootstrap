import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from './topnav.jsx';
import { ArticleList, Article } from './articles.jsx'
import 'font-awesome/css/font-awesome.css';
import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {key: 0, title: "Why I created this web site", content: "Mainly to learn more about ux and front-end (React) development. Sub goals include modern web dev tools such as npm, webkit, bower etc. as well as Azure-based deployment and practices.", image_url: "http://placehold.it/500x300" },
                {key: 1, title: "Just a small change", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptates ut esse, nemo mollitia nobis voluptatum. Dolor, dolorum eveniet perferendis debitis! Maiores esse nihil, quasi. Asperiores necessitatibus labore, nulla dolores.", image_url: "http://placehold.it/500x300"}
            ]
        };
    };

    render () {
        return (
            <div>
                <TopNavigation />
                <div className="container-fluid container-sm-height">
                    <div className="row row-sm-height">
                        <section className="col-sm-9 col-lg-8 col-sm-push-3 col-lg-push-2 col-md-height">
                            <ArticleList articles={this.state.articles} />
                        </section>
                        <aside className="col-sm-3 col-lg-2 col-sm-pull-9 col-lg-pull-8 col-md-height"> 
                            <h4 className="mugs-title">
                                <b>Mug links</b>
                            </h4>

                            <div className="mugs-list">
                                <a href="#">
                                    <img src="http://placehold.it/150x75" />
                                    <h4>Mug 1</h4>
                                </a>
                                <a href="#">
                                    <img src="http://placehold.it/150x75" />
                                    <h4>Mug 2</h4>
                                </a>
                                <a href="#">
                                    <img src="http://placehold.it/150x75" />
                                    <h4>Mug 3</h4>
                                </a>                                   
                            </div>
                        </aside>
                        <aside className="some-list col-xs-12 col-lg-2 hidden-md col-md-height">
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
                        </aside>
                    </div>   
                </div> 
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));