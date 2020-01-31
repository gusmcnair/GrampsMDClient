import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainSection from './mainsection';
import HeaderSection from './headersection';
import InfoFieldset from './infofieldset';
import SymptomsFieldset from './symptomsfieldset'
import GrampsResults from './grampsresults'
import GrampsMDDescription from './grampsmddescription'
import IndividualSymptom from './individualsymptom'
import {BrowserRouter} from 'react-router-dom'

it.only(`renders App component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it(`renders mainsection component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainSection/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it(`renders header section component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderSection/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it(`renders infofieldset section component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoFieldset/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it(`renders symptomsfieldset section component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<SymptomsFieldset/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it(`renders grampsresults section component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<GrampsResults/>, div);
    ReactDOM.unmountComponentAtNode(div);
})


//passed
it(`renders grampsmddescription section component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<GrampsMDDescription/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

//passed
it(`renders individualsymptom section component without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<IndividualSymptom/>, div);
    ReactDOM.unmountComponentAtNode(div);
})