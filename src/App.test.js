import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./components/Button";

/*The first argument is a string where we can give the name of the test. And second is a callback function*/

test('render the button and handle click event', () => {                                                                              
    const handleClick = jest.fn();                            /* jext.fn() is a mock function */

    render(<Button onClick={handleClick}>Click</Button>)
    const renderedButton = screen.getByText('Click');

    fireEvent.click(renderedButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
})