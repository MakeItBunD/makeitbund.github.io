import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe('BASKET COUNT TESTS', () => {
    const setup = () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
    }

    test('should return 0 by default', async () => {
        // arrange
        setup()

        // assert
        expect(screen.getByTestId('basket-count').textContent).toBe('0')
    })

    test('should return 21 by adding all products to basket', async () => {
        // arrange
        setup()
        const basketAddButtons = screen.getAllByTestId('add-product-btn')

        // act
        basketAddButtons.forEach(button => {
            fireEvent.click(button)
        })

        // assert
        expect(screen.getByTestId('basket-count').textContent).toBe('21')
    })
})