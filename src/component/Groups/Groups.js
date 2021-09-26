import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teams from '../Teams/Teams';
import './Groups.css';

const Groups = () => {

    const [groups, setGroups] = useState([]);
    // cart tickets load
    const [cart, setCart] = useState([]);
    

    useEffect( () => {
        fetch('./groups.json')
            .then( res => res.json())
            .then(data => setGroups(data))
    }, [])

    // from here event Handler will work

    const handleAddGroup =(group) =>{
        // group.isAdded = true ;
        const newCart=[...cart, group];
        
        setCart(newCart);
        // console.log(newCart)
        // console.log(group)
    }




    return (
        <div>
            <div className="row mx-2">
                <div className="col-md-9">
                    {/* group data load */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            groups.map((group, i) => <Teams
                            key={group.key}
                            group={group}
                            handleAddGroup={handleAddGroup}

                            ></Teams>)
                        }
                    
                    </div>
                   

                </div>

                <div className="col-md-3">
                    {/* ticket bought info */}
                    <Cart
                    cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Groups;