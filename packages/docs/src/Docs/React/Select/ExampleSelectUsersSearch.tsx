import React from 'react';
import { Avatar, Select } from '@duik/it';
import * as assets from 'assets';
import cls from './select.module.scss';

const optionsUsers = [
  {
    label: <Avatar sm imgUrl={assets.a01} name="Johny Gaudreau" />,
    value: 1,
    name: 'Johny Gaudreau',
  },
  {
    label: <Avatar sm imgUrl={assets.a02} name="Vilma Novak" />,
    value: 2,
    name: 'Vilma Novak',
  },
  {
    label: <Avatar sm imgUrl={assets.a03} name="Alice Queen" />,
    value: 3,
    name: 'Alice Queen',
  },
  {
    label: <Avatar sm imgUrl={assets.a04} name="Evgeny Kuznetsov" />,
    value: 4,
    name: 'Evgeny Kuznetsov',
  },
  {
    label: <Avatar sm imgUrl={assets.a05} name="Jana Johnsson" />,
    value: 5,
    name: 'Jana Johnsson',
  },
  {
    label: <Avatar sm imgUrl={assets.a06} name="Karolina Kolarova" />,
    value: 6,
    name: 'Karolina Kolarova',
  },
  {
    label: <Avatar sm imgUrl={assets.a07} name="Klara Horton" />,
    value: 7,
    name: 'Klara Horton',
  },
  {
    label: <Avatar sm imgUrl={assets.a08} name="Luu Thanh Nga" />,
    value: 8,
    name: 'Luu Thanh Nga',
  },
];

export const ExampleSelectUsersSearch = () => {
  const [keyword, setKeyword] = React.useState('');

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const filteredOptions = optionsUsers.filter(option =>
    `${option.name}`.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <Select
      className={cls['select-avatar']}
      defaultOption={optionsUsers[0]}
      options={filteredOptions}
      searchable
      inputSearchProps={{
        value: keyword,
        onChange: onChangeKeyword,
      }}
    />
  );
};

export const ExampleSelectUsersSearchCode = `// in CSS
.select-avatar {
  .btn {
    padding-left: 8px;
  }
}

// React
import React from 'react'
import { Avatar, Select } from '@duik/it'

/**
 * OPTIONAL: including name property in out option list for filtering based on keyword
 */
const optionsUsers = [
  { label: <Avatar sm imgUrl={/* img url */} name="Johny Gaudreau" />, value: 1, name: "Johny Gaudreau" },
  { label: <Avatar sm imgUrl={/* img url */} name="Vilma Novak" />, value: 2, name: "Vilma Novak" },
  { label: <Avatar sm imgUrl={/* img url */} name="Alice Queen" />, value: 3, name: "Alice Queen" },
  { label: <Avatar sm imgUrl={/* img url */} name="Evgeny Kuznetsov" />, value: 4, name: "Evgeny Kuznetsov" },
  { label: <Avatar sm imgUrl={/* img url */} name="Jana Johnsson" />, value: 5, name: "Jana Johnsson" },
  { label: <Avatar sm imgUrl={/* img url */} name="Karolina Kolarova" />, value: 6, name: "Karolina Kolarova" },
  { label: <Avatar sm imgUrl={/* img url */} name="Klara Horton" />, value: 7, name: "Klara Horton" },
  { label: <Avatar sm imgUrl={/* img url */} name="Luu Thanh Nga" />, value: 8, name: "Luu Thanh Nga" },
]

export const ExampleSelectUsersSearch = () => {
  /* We are in control, so we have to store the keyword */
  const [keyword, setKeyword] = React.useState('')
  const onChangeKeyword = (e) => { setKeyword(e.target.value) }

  const handleOptionClick = (option: SelectOption) => {
    setActiveOption(option)
    // reset keyword after select
    setKeyword('')
  }

  /*
   * Processing the keyword is up to us
   * here we simply filter items that match the keyword
   * then we pass it to select as options prop
   */
  const filteredOptions = optionsUsers.filter(option => (
    option.name.toLowerCase().includes(keyword.toLowerCase())
  ))

  return (
    <Select
      className={cls['select-avatar']}
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={filteredOptions}
      {/* enabling search (otherwise the search input won't be displayed */}
      searchable
      {/*
        * the input doesn't do anything on it's own
        * we need to pass some props to retrieve the search keyword
        */}
      inputSearchProps={{
        value: keyword,
        onChange: onChangeKeyword
      }}
    />
  )
}

`;
