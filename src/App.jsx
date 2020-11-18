import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from'./components/DropDown';
import Translate from './components/Translate';
import Header from './components/Header'
import Route from './components/Route';

const items = [
  {
    title: 'What is React',
    content: 'React is front end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a favourite JS library amongst engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];


export default () => {
  const [ selected, setSelected ] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/'> <Accordion items={items} /> </Route>
      <Route path='/list'> <Search /> </Route>
      <Route path='/dropdown'> <DropDown selected={selected} onSelectedChange={selected} options={options} /> </Route>
      <Route path='/translate'> <Translate /> </Route>
   </div>
  );
}