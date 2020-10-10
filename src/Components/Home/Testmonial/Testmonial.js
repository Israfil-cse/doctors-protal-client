import React from 'react';
import './Testmonial.css';
import quite from '../../../images/quote.png';
import elips1 from '../../../images/Ellipse1.png';
import elips2 from '../../../images/Ellipse2.png';
import elips3 from '../../../images/Ellipse3.png';
import TestmonialDetails from './TestmonialDetails';

const TestmonialData = [
    {
        title: 'It is a long established fact that by the readable content of a lot layout. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, delectus. ',
        image: elips1,
        imgTitle: 'Winson Herry',
        subtitle: 'California'
    },
    {
        title: 'It is a long established fact that by the readable content of a lot layout. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, delectus. ',
        image: elips2,
        imgTitle: 'Winson Herry',
        subtitle: 'California'
    },
    {
        title: 'It is a long established fact that by the readable content of a lot layout. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, delectus. ',
        image: elips3,
        imgTitle: 'Winson Herry',
        subtitle: 'California'
    }
]

const Testmonial = () => {
    return (
        <section className="testContainer">
            <div className="row">
                <div className="col-md-6">
                    <div className="ml-5 mt-5">
                    <h5 style={{color: ' #1cc7c1'}}>TESTMONIAL</h5>
                    <h2>What's Our patients <br/> Says</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid mr-5 quteImg" src={quite} alt=""/>
                </div>
            </div>

            <div className="row">
                {
                    TestmonialData.map(testdata => <TestmonialDetails testdata={testdata}></TestmonialDetails>)
                }
            </div>
        </section>
    );
};

export default Testmonial;