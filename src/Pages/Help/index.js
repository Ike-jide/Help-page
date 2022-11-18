
import React from "react";
import './style.css';
import PropTypes from 'prop-types'

function Help(props){
    return(
        <div>
            <div className="help-header">
            <h2>Help Center</h2>
            <p>Learn how to use DevAsk and find answers to common questions.</p>
            </div>
            <div className="help-body">
            <h3>Welcome to DevAsk Help Center!</h3>
            <h4>Select a topic</h4>
            <p>Select a topic that best describes your issue</p> 
            </div>
            <div className='grid'>
    
                    <a href='#home' className='fcc-btn'> <img src={props.metas[0].image}alt="" className="card-img" />Asking & Answering <br/>a Question</a>
                    <a href='#home' className='fcc-btn'><img src={props.metas[1].image}alt="" className="card-img" />Accout settings</a>
                    <a href='#home' className='fcc-btn'><img src={props.metas[2].image} alt="" className="card-img" />Dashboard</a>
                    <a href='#home' className='fcc-btn'><img src={props.metas[3].image}alt="" className="card-img" />Safety and security</a>
                    <a href='#home' className='fcc-btn'><img src={props.metas[4].image}alt="" className="card-img" />Rules and policy</a>
                    <a href='#home' className='fcc-btn'><img src={props.metas[5].image}alt="" className="card-img" />Wallet</a>
            
            </div>
            <div className="lower-body">
           <h4>Frequently Asked Questions on DevAsk</h4>
           <ul className="lower-ul">
            <li><a href="/">How do I ask or answer homework questions?</a></li>
            <li><a href="/">How much research effort is expected of DevAsk users?</a></li>
            <li><a href="/">Why is “can someone help me” not an actual question?</a></li>
            <li><a href="/">What is the proper way to approach DevAsk as somone completely new to programming?</a></li>
            <li><a href="/">Something in my website or projeoct doesn't work, canI just paste a link to it?</a></li>
            <li><a href="/">Is it okay to search for code optimizationm help?</a></li>
            <li><a href="/"><span>See also</span> FAQ index</a></li>
           </ul>
           </div>
           <div className="blue">
            <div className="green">
           <img src={props.metas[6].image}alt=""/>
           <h5>Still need help?</h5></div>
           <p>We’re here for you! if you haven’t found a <br/>solution after exploring our help articles,<br/> you can get in touch with our support team.</p>
           <button className="help-support">Get support</button>
           </div>
        </div>
    )
}
Help.propTypes = {
     image:PropTypes.string
}


export default Help;