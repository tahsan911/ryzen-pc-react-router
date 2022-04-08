import { ArrowCircleRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
import React from 'react';
import './Home.css'
import img from './../../pc.png'
import useReview from '../../Hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';
import { Link } from 'react-router-dom';

const Home = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div className='container my-5 mt-sm-5'>
            <section className="row row-cols-1 row-cols-md-3">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center w-100">
                    <div className="col col-sm-12 col-md-6 col-lg-6 py-5 py-sm-2 text-center text-lg-start ">
                        <h1 className='text-black display-6'>Build Your Best PC With <span className="text-danger font">AMD Ryzen Series</span></h1>
                        <p className='text-secondary py-3' text-md-start>
                            Grab your pc with the most powerful proessor with dedicated vega 9 Graphics.The Ryzen 5 5600G delivers enough grunt for 720p performance in modern games.
                        </p>
                        <button className='button'>Explore more<ChevronDoubleRightIcon className='arrow'></ChevronDoubleRightIcon> </button>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-6 text-center">
                        <img width={280} src={img} alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className="py-5 my-5">
                    <h1 className="text-center">
                        Customer's Review : {reviews.length}
                    </h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        reviews.slice(0, 3).map(review => <HomeReview
                            key={review.key}
                            review={review}
                        ></HomeReview>)
                    }
                </div>
                <br />
                <Link to='/Reviews'>
                    <button className="btn btn-primary">See More...</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;