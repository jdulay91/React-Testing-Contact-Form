import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../components/ContactForm'

test('Renders Form without errors', () => {
    render(<ContactForm />)
})

///Testing out the form Itself

test('Test fill and submit options for the form', async() => {

    render(<ContactForm />)

    //Document targetters
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const submitBtn = screen.getByRole('button',{
        name: /submit/i
    })  

    // Filling out input

    fireEvent.change(firstNameInput, {
        target: {value: 'dog'}
    }) 

    fireEvent.change(lastNameInput,{
        target: {value: 'dulay' }
    })

    fireEvent.change(emailInput,{
        target: {value: 'julliann@julliann.com' }
    })

    fireEvent.change(messageInput,{
        target: {value: 'hello from the test world' }
    })

    //click events
    fireEvent.click(submitBtn)

    //assertions
    expect(await screen.findByText(/julliann/i)).toBeInTheDocument();

})