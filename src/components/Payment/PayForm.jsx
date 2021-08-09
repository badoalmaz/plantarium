import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  stepper: {
    padding: "50px",
    margin: "0 auto",
    width: "60vw",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, .7)",
  },
  formBack: {
    padding: "20px",
    height: "90vh",
    marginTop: "4.4rem",
    backgroundImage: `url(${"https://i.pinimg.com/originals/f0/a9/0c/f0a90c2bc63dfa352e39c28dfff16d1f.jpg"})`,
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='firstName'
        render={({ field }) => (
          <TextField
            id='first-name'
            label='First Name'
            variant='outlined'
            placeholder='Enter Your First Name'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='lastName'
        render={({ field }) => (
          <TextField
            id='last-name'
            label='Last Name'
            variant='outlined'
            placeholder='Enter Your Last Name'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='nickName'
        render={({ field }) => (
          <TextField
            id='nick-name'
            label='Nick Name'
            variant='outlined'
            placeholder='Enter Your Nick Name'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='emailAddress'
        render={({ field }) => (
          <TextField
            id='email'
            label='E-mail'
            variant='outlined'
            placeholder='Enter Your E-mail Address'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='phoneNumber'
        render={({ field }) => (
          <TextField
            id='phone-number'
            label='Phone Number'
            variant='outlined'
            placeholder='Enter Your Phone Number'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='alternatePhone'
        render={({ field }) => (
          <TextField
            id='alternate-phone'
            label='Alternate Phone'
            variant='outlined'
            placeholder='Enter Your Alternate Phone'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='address1'
        render={({ field }) => (
          <TextField
            id='address1'
            label='Address 1'
            variant='outlined'
            placeholder='Enter Your Address 1'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='address2'
        render={({ field }) => (
          <TextField
            id='address2'
            label='Address 2'
            variant='outlined'
            placeholder='Enter Your Address 2'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='country'
        render={({ field }) => (
          <TextField
            id='country'
            label='Country'
            variant='outlined'
            placeholder='Enter Your Country Name'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <Cards
        style={{ backgroundColor: "black" }}
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form action='#' style={{ margin: "20px" }}>
        <TextField
          type='tel'
          name='number'
          placeholder='Card Number'
          fullWidth
          margin='normal'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <TextField
          type='tel'
          name='name'
          placeholder='Name'
          fullWidth
          margin='normal'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <TextField
          type='text'
          name='expiry'
          placeholder='MM/YY Expiry'
          fullWidth
          margin='normal'
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <TextField
          type='tel'
          name='cvc'
          placeholder='CVC'
          fullWidth
          margin='normal'
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const PayForm = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.formBack}>
      <Stepper
        className={classes.stepper}
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant='caption'
                align='center'
                style={{ display: "block" }}
              ></Typography>
            );
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography className={classes.stepper} variant='h3' align='center'>
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form
              className={classes.stepper}
              onSubmit={methods.handleSubmit(handleNext)}
            >
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                type='submit'
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default PayForm;
