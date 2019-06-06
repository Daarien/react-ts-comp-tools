import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Login from '../';

describe('Login', () => {
  let login: ShallowWrapper;
  beforeEach(() => (login = shallow(<Login />)));

  it('has h1 tag', () => {
    expect(login.find('h1').text()).toEqual('Login');
  });

  it('has id "foo"', function() {
    expect(login.is('#login-wrapper')).toBe(true);
  });

  it('has form inside', () => {
    expect(login.find('form').exists()).toEqual(true);
  });

  it('changes the text of email', () => {
    login.find('#formEmail').simulate('change', {
      target: {
        name: 'email',
        value: 'some@test.com',
      },
    });

    expect(
      login
        .update()
        .find('#formEmail')
        .props().value
    ).toEqual('some@test.com');
  });

  it('changes the text of login button after clicking it', () => {
    login.find('#loginSubmit').simulate('click', { preventDefault() {} });
    expect(
      login
        .update()
        .find('#loginSubmit')
        .text()
    ).toEqual('Logging in...');
  });

  it('provide form submitting', () => {
    login.find('#formEmail').simulate('change', {
      target: {
        name: 'email',
        value: 'some@test.com',
      },
    });
    login.find('input[name="password"]').simulate('change', {
      target: {
        name: 'password',
        value: '123',
      },
    });
    login.find('form').simulate('submit', {
      preventDefault: jest.fn(),
      currentTarget: {
        checkValidity: () => true,
      },
    });

    expect(login.update().state('validated')).toBeTruthy();
  });
});
