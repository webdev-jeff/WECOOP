import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';

function RenderPrice({ price, numPlans, max_n_features }) {
  const n_features = price.features.length;
  const features = price.features.map((feature) =>
    <CardText>{feature}</CardText>
  );
  const features_blank = Array.from({length: max_n_features - n_features}, (x,i) => i).map(() => <CardText>{<br />}</CardText>);
  const col_class = "col-" + 12 / (numPlans.developer + numPlans.ideaer);
  const ColoredLine = ({ color }) => (
    <hr style={{ color: color, backgroundColor: color, height: 0.4 }} />
  );
  const RenderCardFeatureTitle = () => (
    <CardSubtitle className="mb-1 font-weight-bold" style={{fontSize: "30px"}}>Features</CardSubtitle>
  );
  if (price.category === "ideaer"){
    return (
      <div className={col_class + " text-center"}>
        <Card body outline color="primary" className="pricing-card-body text-white">
            <CardTitle className="pricing-title">{price.name}</CardTitle>
            <CardText style={{height: "145px"}}>{price.description}</CardText>
            <ColoredLine color="#007bff"/>
            <RenderCardFeatureTitle />
            {features}
            {features_blank}
            <CardText><span>$ <span style={{fontSize: "50px"}}>{price.price}</span> / month</span></CardText>
        </Card>
        <Button outline color="primary" className="mt-5 pricing-button">Choose</Button>
      </div>
    )
  } else {
    return (
      <div className={col_class + " text-center"}>
        {/* <Card className="text-white bg-developer pricing-card-body">
          <CardBody> */}
          <Card  body outline color="info" className="pricing-card-body text-white">
            <CardTitle className="pricing-title">{price.name}</CardTitle>
            <CardText style={{height: "145px"}}>{price.description}</CardText>
            <ColoredLine color="#17a2b8"/>
            <RenderCardFeatureTitle />
            {features}
            {features_blank}
            <CardText>{ price.price === "0"
                        ? <span style={{fontSize: "50px"}}>Free</span>
                        : <span>$ <span style={{fontSize: "50px"}}>{price.price}</span>  / month</span>
                      }
            </CardText>
          {/* </CardBody> */}
        </Card>
        <Button outline color="info" className="mt-5 pricing-button">Choose</Button>
      </div>
    )
  }
  
}

function RenderHeadline({numPlans}) {
  const ideaerCol = 12 * numPlans.ideaer / (numPlans.developer + numPlans.ideaer);
  const devCol = 12 - ideaerCol;
  return (
    <React.Fragment>
      <div className={"text-center col-"+ideaerCol}>
        {/* <Card className="text-white bg-ideaer pricing-card-headline">
          <CardBody className="pt-1 pb-1"> */}
          <Card body outline color="primary" className="pricing-card-headline text-white pt-1 pb-1">
            <CardTitle className="pricing-title">Ideaer's plan</CardTitle>
          {/* </CardBody> */}
        </Card>
      </div>
      <div className={"text-center col-"+devCol}>
        {/* <Card className="text-white bg-developer pricing-card-headline">
          <CardBody className="pt-1 pb-1"> */}
          <Card body outline color="info" className="pricing-card-headline text-white pt-1 pb-1">
          <CardTitle className="pricing-title">Developer's plan</CardTitle>
          {/* </CardBody> */}
        </Card>
      </div>
    </React.Fragment>
  );
}

function Pricing(props) {
  const max_n_features = props.prices.map((price) => price.features.length).reduce((a,b) => a > b ? a : b)
  const numOfIdeaerOrDeveloperPlans = props.prices.reduce((acc, it) => {acc[it.category] = acc[it.category] + 1 || 1; return acc;}, {});
  const prices = props.prices.map((price) =>
    <RenderPrice key={price.id} price={price} numPlans={numOfIdeaerOrDeveloperPlans} max_n_features={max_n_features}/>
  )
  return (
    <div className="container-fluid banner banner-1 pl-0 pr-0 mr-0 ml-0">
      <div className="row align-items-top mr-0 ml-0" style={{paddingTop: "120px", paddingLeft: "30px", paddingRight: "30px"}}>
        <RenderHeadline numPlans={numOfIdeaerOrDeveloperPlans} />
      </div>
      <div className="row align-items-top mr-0 ml-0" style={{paddingTop: "50px", paddingLeft: "30px", paddingRight: "30px"}}>
        {prices}
      </div>
    </div>
  );
}

export default Pricing;