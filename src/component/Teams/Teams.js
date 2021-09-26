import React from 'react';
import './Teams.css'

const Teams = (props) => {
    const {name, company, img, price_ticket, origin, fandom_name, members_num} = props.group || {}
    

    return (
        <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top img-fluid" alt=""/>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>Company: {company}</h5>
        <h5><small>Origin:{origin}</small></h5>
        <h5><small>Number of members:{members_num}</small></h5>
        <h5><small>FanDom:{fandom_name}</small> </h5>
        {/* {props.group.isAdded? (<button className="btn btn-danger mt-3 text-white">Already dded</button>)
        :(<button
          onClick={ () => props.handleAddGroup(props.group)} className="btn fw-bold text-center">Ticket<i className="fas fa-money-bill-alt"></i>:{price_ticket}</button>)} */}
       <button
        onClick={ () => props.handleAddGroup(props.group)} className="btn fw-bold text-center  mx-5 py-2">Ticket<i className="fas fa-money-bill-alt"></i>:{price_ticket}</button>
       
       
        
        
      </div>
    </div>
  </div>
    );
};

export default Teams;