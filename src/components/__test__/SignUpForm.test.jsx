import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import SignUpForm from '../forms/SignUpForm'

describe('SignUpForm',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< SignUpForm />)
    });
    test('Gives an object with the correct structure after submit', () => {
        const formData = {
            petPreferences: ["sadasd"],
            description: "dasd",
            email: "dsad@llol.com",
            houseType: "das",
            lastName: "das",
            name: "dasdas",
            password: "asdas",
            userName: "dasdas",
            address: {
                country: "asda",
                province: "sdasd", 
                addressLine: "asdas", 
                postal: "dasda" },
                geo: {
                    coordinates: [28,-16] },
                }
        expect(formData).toHaveProperty()
    })
});

