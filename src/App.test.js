import React from 'react';
import {
  render
} from '@testing-library/react';
import App from './App';
import {
  func
} from 'prop-types';

test('renders learn react link', () => {
  const {
    getByText
  } = render( < App / > );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

jugueteloco(2, 3);

var persona = {
  nombre: "Jorge",
  edad: 33,
}
var ariel = {
  hobbies: ['rally', 'futbol', 'equitacion']
}

function jugueteloco(datoA, datoB) {
  ;
  resultado = datoA + datoB
  return resultado;
}