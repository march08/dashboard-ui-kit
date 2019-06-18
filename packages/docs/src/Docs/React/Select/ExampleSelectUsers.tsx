import React from "react";
import { Select, SelectOption } from "@duik/it";
import { Avatar } from "@duik/it";
import * as assets from "assets";
import cls from "./select.module.scss";

const optionsUsers = [
  { label: <Avatar sm imgUrl={assets.a01} name="Johny Gaudreau" />, value: 1 },
  { label: <Avatar sm imgUrl={assets.a02} name="Vilma Novak" />, value: 2 },
  { label: <Avatar sm imgUrl={assets.a03} name="Alice Queen" />, value: 3 },
  { label: <Avatar sm imgUrl={assets.a04} name="Evgeny Kuznetsov" />, value: 4 }
];

export const ExampleSelectUsers = () => {
  const [activeOption, setActiveOption] = React.useState<
    SelectOption | undefined
  >(optionsUsers[0]);

  const handleOptionClick = (option: SelectOption) => {
    setActiveOption(option);
  };
  return (
    <Select
      className={cls["select-avatar"]}
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={optionsUsers}
    />
  );
};

export const ExampleSelectUsersCode = `// in CSS
.select-avatar {
  .btn {
    padding-left: 8px;
  }
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
  
  // Setting default value
  const [activeOption, setActiveOption] = React.useState(optionsUsers[0])

  const handleOptionClick = (option, name) => {
    setActiveOption(option)
  }

  return (
    <Select
      className="select-avatar"
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={optionsUsers}
    />
  )
}

`;
