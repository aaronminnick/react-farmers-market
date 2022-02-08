import React from 'react';
import ProduceItem from './ProduceItem';

function ProduceList(props) {
  return (
    <React.Fragment>
      <h3>Seasonal Produce:</h3>
      {props.produceArray.map((item, index) =>
        <ProduceItem item={item}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default ProduceList;