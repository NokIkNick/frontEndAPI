import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export const Questions = () => {
    const naviage = useNavigate();


  const handleOnChange = (e) => {
    console.log(e.target.value);
    naviage(`/questions/${e.target.value}`);
  }
  
    return (
    <>
        <form>
            <label>
                Question: 
                <select onChange={handleOnChange}>
                    <option>Select a question</option>
                    <option value="1">Question 1</option>
                    <option value="2">Question 2</option>
                    <option value="3">Question 3</option>
                    <option value="4">Question 4</option>
                    <option value="5">Question 5</option>
                    <option value="6">Question 6</option>
                    <option value="7">Question 7</option>
                    <option value="8">Question 8</option>
                    <option value="9">Question 9</option>
                    <option value="10">Question 10</option>
                    <option value="11">Question 11</option>
                    <option value="12">Question 12</option>
                    <option value="13">Question 13</option>
                </select>
            </label>
        </form>
        <Outlet/>
    </>
  )
}
