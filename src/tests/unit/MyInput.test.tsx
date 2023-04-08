import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import MyInput from '../../components/UI/MyInput';

const setup = () => {
    render(
        <MyInput 
            className='test'
            type='text'
        />
    )
}

describe('MY INPUT TESTS', () => {
    test('input value should be empty by default', () => {
        // arrange
        setup()
        const input: HTMLInputElement = screen.getByTestId('my-input')

        // assert
        expect(input.value).toBe('')
    })

    test('change input value to somestring', () => {
        // arrange
        setup()
        const input: HTMLInputElement = screen.getByTestId('my-input')

        // act
        fireEvent.change(input, {target: {value: 'somestring'}})

        // assert
        expect(input.value).toBe('somestring')
    })

    test('change input value to somestring and return to empty by default', () => {
        // arrange
        setup()
        const input: HTMLInputElement = screen.getByTestId('my-input')

        // act
        fireEvent.change(input, {target: {value: 'somestring'}})

        // assert
        expect(input.value).toBe('somestring')

        // act
        fireEvent.change(input, {target: {value: ''}})

        // assert
        expect(input.value).toBe('')
    })
})
