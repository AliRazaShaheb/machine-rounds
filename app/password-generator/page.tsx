"use client";
import ButtonComp from "@/components/ButtonComp";
import CheckboxComp from "@/components/CheckboxComp";
import React, { ChangeEvent, useState } from "react";

const optionListData = [
  {
    label: "Uppercase",
    state: true,
  },
  {
    label: "Lowercase",
    state: true,
  },
  {
    label: "Number",
    state: true,
  },
  {
    label: "Symbol",
    state: true,
  },
];

const PasswordGenerator = () => {
  const [copyBtnText, set_copyBtnText] = useState("copy");
  const [password, set_password] = useState("");
  const [range, set_range] = useState(10);
  const [optionList, set_optionList] = useState(optionListData);

  const optionOnChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const { checked } = e.target;
    // const _optionList = [...optionList];
    // _optionList[id].state = !optionList[id].state;
    // _optionList[id].state = checked;
    // set_optionList(_optionList);

    // another way option
    set_optionList((prev) => {
      const updateList = [...prev];
      updateList[id].state = checked;
      return updateList;
    });
  };

  const rangeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    set_range(Number(value));
  };
  const generatePasswordHandler = () => {
    let characters = "";
    let pass = "";
    if (optionList[0].state) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (optionList[1].state)
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    if (optionList[2].state) characters += "0123456789";
    if (optionList[3].state) characters += "@#$%^&*()/.>,<`~";
    for (let i = 0; i < range; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      pass += characters[randomIndex];
    }
    set_password(pass);
  };
  const copyBtn = async () => {
    await window.navigator.clipboard.writeText(password);
    set_copyBtnText("Copied");
    setTimeout(() => {
      set_copyBtnText("Copy");
    }, 1000);
  };
  return (
    <div className="border w-1/2  p-4 rounded-sm">
      {password ? (
        <div className="password-copy flex justify-between items-center my-4">
          <p className="text-xl text-purple-500">{password}</p>
          <ButtonComp
            label={copyBtnText}
            className="bg-purple-500"
            onClick={copyBtn}
          />
        </div>
      ) : null}
      <div className="range-container my-4">
        <div className="password-length flex justify-between items-center my-4">
          <p>Password Length</p>
          <p>{range}</p>
        </div>
        <div className="range">
          <input
            type="range"
            min={4}
            max={20}
            className="w-full"
            value={range}
            onChange={rangeOnChange}
          />
        </div>
      </div>
      <div className="checkbox-container grid grid-cols-2 my-4">
        {optionList.map((each, idx) => {
          return (
            <CheckboxComp
              label={each.label}
              key={each.label}
              checked={each.state}
              onChange={optionOnChange}
              index={idx}
            />
          );
        })}
      </div>
      <div className="button-container flex justify-center items-center my-4">
        <ButtonComp
          label="Generate"
          className="bg-blue-500"
          onClick={generatePasswordHandler}
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
