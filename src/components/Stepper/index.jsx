import React, { Fragment, useState } from "react";

import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );

  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(currentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1]);
  }

  return (
    <Fragment>
      {props.children(prevStep, nextStep, currentStep, steps)}
    </Fragment>
  );
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
