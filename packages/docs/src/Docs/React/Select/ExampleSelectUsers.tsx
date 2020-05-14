import React from 'react';
import { Select } from '@duik/it';
import { Avatar } from '@duik/it';
import * as assets from 'assets';
import cls from './select.module.scss';

const optionsUsers = [
  { label: <Avatar sm imgUrl={assets.a01} name="Johny Gaudreau" />, value: 1 },
  { label: <Avatar sm imgUrl={assets.a02} name="Vilma Novak" />, value: 2 },
  { label: <Avatar sm imgUrl={assets.a03} name="Alice Queen" />, value: 3 },
  {
    label: <Avatar sm imgUrl={assets.a04} name="Evgeny Kuznetsov" />,
    value: 4,
  },
];

export const ExampleSelectUsers = () => {
  return (
    <Select
      className={cls['select-avatar']}
      placeholder="Select User"
      options={optionsUsers}
      defaultOption={optionsUsers[0]}
    />
  );
};

export const ExampleSelectUsersCode = `// in CSS
.select-avatar .btn .avatar {
  margin-left: -8px;
  margin-right: 8px;
}

// React
import React from 'react'
import { Avatar, Select } from '@duik/it'

const optionsUsers = [
  { label: <Avatar sm imgUrl={/* img url */} name="Johny Gaudreau" />, value: 1 },
  { label: <Avatar sm imgUrl={/* img url */} name="Vilma Novak" />, value: 2 },
  { label: <Avatar sm imgUrl={/* img url */} name="Alice Queen" />, value: 3 },
  { label: <Avatar sm imgUrl={/* img url */} name="Evgeny Kuznetsov" />, value: 4 },
]

export const ExampleSelectUsers = () => {
  return (
    <Select
      className="select-avatar"
      placeholder="Select User"
      options={optionsUsers}
      defaultOption={optionsUsers[0]}
    />
  )
}

`;
