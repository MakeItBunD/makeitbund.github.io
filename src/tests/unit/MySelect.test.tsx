import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import MySelect from '../../components/UI/MySelect';

const setup = () => {
    render(
        <MySelect
            className='test'
            value='test-1'
            onChange={value => value}
            options={[
                {name: 'test-1', value: 'test-1'},
                {name: 'test-2', value: 'test-2'},
                {name: 'test-3', value: 'test-3'}
            ]}
        />
    )
}

describe('MY INPUT TESTS', () => {
    test('select value should be test-1 by default', () => {
        // arrange
        setup()
        const select: HTMLSelectElement = screen.getByTestId('my-select')

        // assert
        expect(select.value).toBe('test-1')
    })

    test('change select value to test-2', () => {
        // arrange
        setup()
        const select: HTMLSelectElement = screen.getByTestId('my-select')

        // act
        fireEvent.change(select, {target: {value: 'test-2'}})

        // assert
        expect(select.value).toBe('test-2')
    })

    test('change select value to test-3 and return to test-1 by default', () => {
        // arrange
        setup()
        const select: HTMLSelectElement = screen.getByTestId('my-select')

        // act
        fireEvent.change(select, {target: {value: 'test-3'}})

        // assert
        expect(select.value).toBe('test-3')

        // act
        fireEvent.change(select, {target: {value: 'test-1'}})

        // assert
        expect(select.value).toBe('test-1')
    })
})
