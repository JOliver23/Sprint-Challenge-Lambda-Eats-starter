import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { SForm } from "./Form-Styles";

export default function Form() {
    const [order, setOrder] =useState([]);

    const [formState, setFormState] = useState({
        name: "",
        address: "",
        size: "",
        special: "",
        toppings: ""
        
    });

    const [errors, setErrors] = useState({
        name: "",
        address: "",
        size: "",
        toppings: "",
        special: ""
    });
    
    const formSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        address: yup.string(),
        size: yup.string().required("Please select a size"),
        pepperoni: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        olive: yup.boolean(),
        pineapple: yup.boolean(),
        mushroom: yup.boolean(),
        bacon: yup.boolean(),
        special: yup.string()
    });

    const validateChange = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({ ...errors, [e.target.name]: ""})
        })
        .catch(err => {
            console.log("error", err);
            setErrors({ ...errors, [e.target.name]: err.errors[0]})
        });
    };
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid)
        })
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            setOrder(formState);
            setFormState({
                name: "",
                address: "",
                size: "",
                toppings: "",
                special: ""
            });
            alert("Order submitted successfully!");
        })

    }
    const inputChange = e => {
        e.persist();
        const newOrderData = {
            ...formState,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e)
        setFormState(newOrderData)
    }

    return (
        <SForm onSubmit={formSubmit}>
            <h2>Build Your Own Pizza</h2>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={inputChange}
                    value={formState.name}
                    data-cy="name"
                />
                {errors.name.length > 2 ? <p className="error">{errors.name}</p> : null}
            </label>
            <label htmlFor="address">
                Delivery Address
                <input 
                    type="text"
                    id="address"
                    name="address"
                    onChange={inputChange}
                    value={formState.address}
                />
            </label>
            <label htmlFor="size">
                Select Size
                <select id="size" name="size" onChange={inputChange} value={formState.size}>
                    <option value="small">Small 7" </option>
                    <option value="medium">Medium 10"</option>
                    <option value="large">Large 14"</option>
                    <option value="x-large">X-Large 18"</option>
                </select>
            </label>
            <label htmlFor="toppings" className="toppings">
                Select Toppings
                <input type="checkbox" name="pepperoni" onChange={inputChange} value="pepperoni"/>Pepperoni
                <input type="checkbox" name="sausage" onChange={inputChange} value="sausage"/>Sausage
                <input type="checkbox" name="pineapple" onChange={inputChange} value="pineapple"/>Pineapple
                <input type="checkbox" name="olive" onChange={inputChange} value="Olive"/>Olive
                <input type="checkbox" name="bacon" onChange={inputChange} value="bacon"/>Bacon
                <input type="checkbox" name="mushroom" onChange={inputChange} value="mushroom"/>Mushroom
            </label>
            <label htmlFor="special">
                Special Instructions
                <textarea 
                    name="special"
                    onChange={inputChange}
                    value={formState.special}
                />
            </label>
            <button type="submit">Submit Order</button>
            <pre>{JSON.stringify(order, 2, null)}</pre>
        </SForm>
    )
}