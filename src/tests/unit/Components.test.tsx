import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MyAlert from '../../components/UI/MyAlert';
import Footer from '../../components/footer/Footer';
import FooterMobile from '../../components/footer/FooterMoble';

describe('COMPONENTS TEST WITH SNAPSHOTS', () => {
    test('my-alert should not be changed', () => {
        // arrange
        render(<MyAlert />)
        const myAlert = screen.getByTestId('my-alert')

        // assert
        expect(myAlert).toMatchSnapshot()
    })

    test('footer should not be changed', () => {
        // arrange
        render(<Footer />)
        const footer = screen.getByTestId('footer-component')

        // assert
        expect(footer).toMatchSnapshot()
    })

    test('footerMobile should not be changed', () => {
        // arrange
        render(<FooterMobile />)
        const footerMobile = screen.getByTestId('mobile-footer-component')

        // assert
        expect(footerMobile).toMatchSnapshot()
    })
})
