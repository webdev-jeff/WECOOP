import React, { Component } from 'react';

// class Features extends Component {

//   render() {
//     return (
//       <div className="container-fluid pl-0 pr-0">
//         <div className="row align-items-center banner banner-2 ml-0 mr-0 pl-0 pr-0">
//           <div className="col-6 text-center title-center">
//             <p className="text-white font-weight-bold title-large text-center mb-0">SDLC</p>
//             </div>
//             <div className="col-6 text-center title-center">
//             <p className="text-white mt-0 ml-2 mr-5">We enforce the rule of SDLC to keep everything tracked. Even if a developer quits in the middle, or the businessman wants to make a second version, new-joiners can always be clear what has been done before. </p>
//           </div>
//         </div>
//         <div className="row align-items-center banner banner-2 ml-0 mr-0 pl-0 pr-0">
//           <div className="col-6 text-center title-center">
//           <p className="text-white mt-0">balablalalllll</p>
//             </div>
//             <div className="col-6 text-center title-center">
//             <p className="text-white font-weight-bold title-large text-center mb-0">Big Data</p>
//           </div>
//         </div>
//         <div className="row align-items-center banner banner-2 ml-0 mr-0 pl-0 pr-0">
//           <div className="col-6 text-center title-center">
//             <p className="text-white font-weight-bold title-large text-center mb-0">Automatic Code Checking</p>
//             </div>
//             <div className="col-6 text-center title-center">
//             <p className="text-white mt-0 mr-5">We integrate automatic code checking tools to alleviate the trust issue between ideaers and developers.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function RenderFeature({feature}){
  const titleClass = "col-6 text-center title-center masked-copy " + feature.texture;
  return (
    <div className="row align-items-center banner banner-2 ml-0 mr-0 pl-0 pr-0">
      <div className={titleClass}>
        {feature.id % 2 == 0
        ? <p className="font-weight-bold title-large text-center mb-0">{feature.name}</p>
        : <p className="text-white mt-0 mr-5">{feature.description}</p>}
      </div>
      <div className={titleClass}>
        {feature.id % 2 != 0
        ? <p className="font-weight-bold title-large text-center mb-0">{feature.name}</p>
        : <p className="text-white mt-0 mr-5">{feature.description}</p>}
      </div>
    </div>
  )
}

function Features(props){
  const prices = props.features.map((feature) =>
    <RenderFeature key={feature.id} feature={feature} />
  )
  return (
    <div className="container-fluid pl-0 pr-0">
      {prices}
    </div>
  )
}

export default Features;