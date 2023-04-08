import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('ROUTER TESTS', () => {
    const renderApp = (initialEntries?: string[] | null) => {
        render(
            <MemoryRouter initialEntries={initialEntries ? initialEntries : ['/catalog']}>
                <App/>
            </MemoryRouter>
        )
    }

    test('click basket-link should render basket-page', async () => {
        // arrange
        renderApp()
        const user = userEvent.setup()
        const basketLink = screen.getByTestId('basket-link')

        // act
        await user.click(basketLink)

        // assert
        expect(screen.getByTestId('basket-page')).toBeInTheDocument()
    })

    test('home-page should render catalog-page by default', () => {
        // arrange
        renderApp()

        // assert
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
    })

    test('error-link when pass does not exist should render catalog-page by default', () => {
        // arrange
        renderApp(['/error'])

        // assert
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
    })
})
