import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './greeting';

describe('Greeting component', () => {

    test('renders Hello World as a text', () => {
    
        render(<Greeting />);
    
        const helloWorldText = screen.getByText('Hello World', {exact: false})
        expect(helloWorldText).toBeInTheDocument();
    
    });


    test('renders Its good to See You if the button was Not clicked', () => {
        render(<Greeting />);
    
        const outputText = screen.getByText('Its good to See You', {exact: false})
        expect(outputText).toBeInTheDocument();
    });

    test('renders Changed if the button was clicked', () => {
        render(<Greeting />);


        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        const changedText = screen.getByText('Changed', {exact: false})
        expect(changedText).toBeInTheDocument();
    });

    test('doesnt renders Its good to See You if the button was clicked', () => {
        render(<Greeting />);


        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        const changedText = screen.queryByText('Its good to See You', {exact: false})
        expect(changedText).toBeNull();
    });

});