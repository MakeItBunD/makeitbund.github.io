import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe('SEARCH MANUFACTURERS TESTS', () => {
    const setup = () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
    }

    test('should return all manufacturers by default', async () => {
        // arrange
        setup()

        // assert
        expect(screen.getByTestId('manufacturer-Russia')).toBeInTheDocument()
        expect(screen.getByTestId('manufacturer-Belgium')).toBeInTheDocument()
        expect(screen.getByTestId('manufacturer-Poland')).toBeInTheDocument()
    })

    test('should filter manufacturers-list to 1 element', async () => {
        // arrange
        setup()
        const searchInput: HTMLInputElement = screen.getByTestId('search-manufacturer-input')
        const searchButton: HTMLInputElement = screen.getByTestId('search-manufacturer-btn')

        // act
        fireEvent.change(searchInput, {target: {value: 'russia'}})
        fireEvent.click(searchButton)

        // assert
        expect(screen.getByTestId('manufacturer-Russia')).toBeInTheDocument()
        expect(screen.queryByTestId('manufacturer-Belgium')).not.toBeInTheDocument()
    })

    test('should filter manufacturers-list to empty with invalid value', async () => {
        // arrange
        setup()
        const searchInput: HTMLInputElement = screen.getByTestId('search-manufacturer-input')
        const searchButton: HTMLInputElement = screen.getByTestId('search-manufacturer-btn')

        // act
        fireEvent.change(searchInput, {target: {value: 'Invalid value'}})
        fireEvent.click(searchButton)

        // assert
        expect(screen.getByTestId('manufacturer-list').innerHTML).toBe('<h3>Ничего не найдено</h3>')
    })
})