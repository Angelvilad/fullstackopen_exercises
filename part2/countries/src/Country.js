import React, {useState} from 'react';

import DetailCountry from './DetailCountry.js';

const Country = ({country}) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = (event) => {
    setShowDetail(!showDetail);
  }
  
  return (
    <div>
      {country.name}
      <button onClick={handleClick}>
        {
          !showDetail ? 'show' : 'quit detail view'
        }
      </button>
      {
        showDetail ? <DetailCountry country={country} /> : ''
      }
    </div>
  )
}

export default Country;