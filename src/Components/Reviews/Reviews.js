import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className="row row-cols-1 row-cols-md-1 g-4 m-0">
                    {
                        reviews.map(review => <Review 
                        key={review.key}
                        review={review}
                        ></Review> )
                    }
                </div>
    );
};

export default Reviews;