import React, { useCallback } from 'react';
import { useImmerReducer } from 'use-immer';

import JoinForm from '../components/JoinForm';

const reducer = (draft, action) => {
  switch (action.type) {
    case 'firstName':
      draft.firstName = action.value;
      break;
    case 'lastName':
      draft.lastName = action.value;
      break;
    case 'email':
      draft.email = action.value;
      break;
    case 'phone':
      draft.phone = action.value;
      break;
    case 'additional':
      draft.additional = action.value;
      break;
    default:
      break;
  }
};

const JoinFormContainer = () => {
  const [state, dispatch] = useImmerReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additional: '',
  });

  const handleChange = useCallback((e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value,
    });
  }, []);

  const {
    firstName, lastName, email, phone, additional,
  } = state;
  return (
    <JoinForm
      firstName={firstName}
      lastName={lastName}
      email={email}
      phone={phone}
      additional={additional}
      onChange={handleChange}
    />
  );
};

export default JoinFormContainer;
