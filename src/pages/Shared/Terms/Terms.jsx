import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, mollitia voluptatibus! Quae nulla libero ratione ducimus laudantium vero, neque, dicta doloribus in, voluptate repudiandae? Dicta pariatur vero earum? Soluta, corrupti nemo libero autem quidem quasi, ad praesentium id ipsum eos, quisquam reprehenderit. Nemo dolorem laboriosam adipisci beatae quo? Perspiciatis, voluptatum.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;