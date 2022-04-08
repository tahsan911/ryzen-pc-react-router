import React from 'react';

const Review = ({review}) => {
        const {img, text, name, ratings} = review
        return (
            <div class="col">
                <div class="card h-100 text-center">
                    <img src={img} class="card-img-tops" alt="..."/>
                        <div class="card-body">
                            <h3 class="card-title">{name}</h3>
                            <p class="card-text">{text}</p>
                            <p>Ratings: {ratings} </p>
                        </div>
                </div>
            </div>
    );
};

export default Review;