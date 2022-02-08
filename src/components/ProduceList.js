import React from 'react';
import ProduceItem from './ProduceItem';
import {Row, Col} from 'react-bootstrap';
import VeggieBasket from '../img/veggiebasket.jpg';

function ProduceList(props) {
  return (
    <React.Fragment>
      <Row>
        <Col className="col-6">
          <h3>Seasonal Produce:</h3>
          {props.produceArray.map((item, index) =>
            <ProduceItem item={item}
              key={index} />
          )}
        </Col>
        <Col className="col-6">
          <img className="veggie-basket" src={VeggieBasket} alt="a woman with a basket of vegetables" />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ProduceList;