import React, { useState, useEffect } from "react";
import * as yup from "yup";

export default function Form() {
    return (
        <form>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                />
            </label>
            <label htmlFor="address">
                Delivery Address
                <input 
                    type="text"
                    id="address"
                    name="address"
                />
            </label>
            <label htmlFor="size">
                Select Size
                <select id="size" name="size">
                    <option value="small">Small 7" </option>
                    <option value="medium">Medium 10"</option>
                    <option value="large">Large 14"</option>
                    <option value="x-large">X-Large 18"</option>
                </select>
            </label>
            <label htmlFor="toppings">
                Select Toppings
                <input type="checkbox" name="pepperoni"/>Pepperoni
                <input type="checkbox" name="sausage"/>Sausage
                <input type="checkbox" name="pineapple"/>Pineapple
                <input type="checkbox" name="olive"/>Olive
                <input type="checkbox" name="bacon"/>Bacon
                <input type="checkbox" name="mushroom"/>Mushroom
            </label>
            <label htmlFor="special">
                Special Instructions
                <textarea 
                    name="special"
                />
            </label>
            <button>Submit Order</button>
        </form>
    )
}