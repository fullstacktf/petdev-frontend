import React from 'react';
import { render, cleanup, fireEvent, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { SignUpForm, Form } from '../forms/SignUpForm';
import axiosMock from "axios";

describe('SignUpForm',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< SignUpForm />)
    });
    test('"Enviar" button is rendered', () => {
        const { getByText } = render(<SignUpForm />);
        expect(getByText("Enviar")).toHaveTextContent("Enviar");
    });
/*     test('"Enviar" button is clickable', () => {
        
        const handler = jest.fn(e=>e.preventDefault());
        const { container } = render(<Form onSubmit={handler}/>)
        fireEvent.click(getByText(container, /Enviar/i));
        expect(handler).toHaveBeenCalledTimes(1);
        
    }); */
});

