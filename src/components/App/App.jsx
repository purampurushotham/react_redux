import React, { Component } from 'react';
import { Values } from 'redux-form-website-template';
import showResults from '../../showResults/showResults'
import SimpleForm from '../../simpleForm/simpleForm';
import SyncValidationForm from '../../SyncValidationForm'
export default class App extends Component {
  /*
   * Component render()
   * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   */
  render() {
    return (
        <div style={{ padding: 15 }}>
          <h2>Simple Form</h2>
          <SimpleForm onSubmit={showResults} />
          <Values form="simple" />
            <SyncValidationForm onSubmit={showResults} />
        </div>
    );
  }
}
