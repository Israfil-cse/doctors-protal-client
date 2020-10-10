import React from 'react';
import './Blog.css';
import elips1 from '../../../images/Ellipse1.png';
import elips2 from '../../../images/Ellipse2.png';

const Blog = () => {
    return (
        <div>
            <div className="text-center my-5">
                <h5 style={{ color: ' #1cc7c1' }}>OUR BLOG</h5>
                <h3>From Our Blog Newsb </h3> 
            </div>
        <div className="row">
            <div className="col-md-4 text-white">
                <div className="BlogUniq">
                <h5 className="mt-3">Rashid Kabir</h5>
                <h5>22 aug 2018</h5>
                <br/>
                <br/>
                <h4>Check at least a doctor in a year for your teeth</h4>
                <br/>
                <br/>
                ->
                </div>
            </div>
            <div className="col-md-4">
                <div className="Blog_parent">
                <img style={{float: 'left'}} src={elips1} alt=""/>
                <h5 className="text_style mt-2">Dr.Caudi</h5>
                <h5 className="text_style">23 aug 2019</h5>
                <h4 className="mt-5">2 times of brush in a day can keep you healthy</h4>
                <br/>
                <small>It is a long established fact that by the readable content of a lot layout. Lorem ipsum, dolor sit amet consectetur adipisicing elit</small>
                </div>
            </div>
            <div className="col-md-4">
            <div className="Blog_parent">
            <img style={{float: 'left'}} src={elips2} alt=""/>
                <h5 className="mt-2 text_style">Dr.John Mitchel</h5>
                <h5 className="text_style">23 aug 2019</h5>
                <h4 className="mt-5">2 times of brush in a day can keep you healthy</h4>
                <br/>
                <small>It is a long established fact that by the readable content of a lot layout. Lorem ipsum, dolor sit amet consectetur adipisicing elit</small>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;