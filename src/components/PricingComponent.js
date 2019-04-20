import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function RenderPrice({ price }) {
  // const n_features = price.features.length;
  const features = price.features.map((feature) =>
    <CardText>{feature}</CardText>
  )
  // const features_blank = Array.from({length: max_n_features - n_features}, (x,i) => i).map(() => <CardText>
  // </CardText>);
  
  return (
    <div className="col-4 text-center">
      <Card className="text-white bg-dark pricing-card">
        <CardBody>
          <CardTitle className="pricing-title">{price.name}</CardTitle>
          {features}
          {/* {features_blank} */}
          <CardText>$ <span style={{fontSize: "50px"}}>{price.price}</span> / month</CardText>
        </CardBody>
      </Card>
      <Button className="mt-5">Choose</Button>
    </div>
  )
}

function Pricing(props) {
  // const max_n_features = props.prices.map((price) => price.features.length).reduce((a,b) => a > b ? a : b)
  const prices = props.prices.map((price) =>
    <RenderPrice key={price.id} price={price} />
  )
  return (
    <div className="container-fluid pl-0 pr-0 mr-0 ml-0">
      <div className="row align-items-top banner banner-1 mr-0 ml-0" style={{paddingTop: "90px", paddingLeft: "30px", paddingRight: "30px"}}>
        {prices}
      </div>
    </div>
  );
}

export default Pricing;