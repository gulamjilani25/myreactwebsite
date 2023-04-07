// React Map
// A map is a data collection type where data is stored in the form of pairs. 
// It contains a unique key. The value stored in the map must be mapped to the key. 
// We cannot store a duplicate pair in the map(). 
// It is because of the uniqueness of each stored key.
//  It is mainly used for fast searching and looking up data.

import React from 'react'
    function MapDemo(){
        const array1 = [1,2,3,4,5];
        const map1 = array1.map(item => item*2 + ",")
        return(
            <h1>{map1}</h1>
        )
    }
export default MapDemo;