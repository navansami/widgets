import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from'./components/DropDown';

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

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <DropDown 
        selected={selected} 
        onSelectedChange={setSelected}
        options={options} 
      />
    </div>
  );
}