import React from 'react';

const Article = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <img src={props.image_url} />

            <div className="row">
                <p className="col-sm-10">
                    {props.content}
                </p>
                <div className="col-sm-2">
                    <button className="btn btn-primary"><i className="fa fa-chevron-right" aria-hidden="true"></i> More</button>
                </div>
            </div>
        </article>        
    );
};

const ArticleList = (props) => {
    return (
        <div>
            {props.articles.map(article => <Article key={article.id} {...article} />)} 
        </div>
    );
}

module.exports = {
    Article: Article,
    ArticleList: ArticleList
};