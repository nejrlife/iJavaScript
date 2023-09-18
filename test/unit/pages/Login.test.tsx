import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Login from '../../../src/pages/Login';
import { MemoryRouter } from 'react-router-dom';

const initAuthenticateUserDetailsState = {
  userToken: '',
  customerId: '',
  isUserAuthenticated: false,
  logInError: '',
  logInPending: false,
  isAuthenticatedError: '',
  isAuthenticatedPending: false
};

const INITIAL_STATE = {
  authenticateUser: { ...initAuthenticateUserDetailsState },
}

const mockStore = configureStore([]);

test('should render Login page', () => {
  console.log(React);
  const store = mockStore(INITIAL_STATE);
  const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('Fix import React issue', () => {
  console.log(React);
});