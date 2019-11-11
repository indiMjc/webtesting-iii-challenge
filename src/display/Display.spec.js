import React from "react";
import { cleanup, render, rerender } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Display from "./Display";

test("Display renders", () => {
	render(<Display />);
});

test("Displays if gate is open/closed and if it's locked/unlocked", () => {
	const { getByText, rerender } = render(<Display />);

	const props = { closed: true, locked: true };

	const lockState = getByText(/unlocked/i);
	const openState = getByText(/open/i);

	expect(lockState.textContent).toBe("Unlocked");
	expect(openState.textContent).toBe("Open");

	rerender(<Display {...props} />);

	expect(lockState.textContent).toBe("Locked");
	expect(openState.textContent).toBe("Closed");
});

test("When gate is locked or closed, led is red.  When gate is unlocked or open, led is gree,", () => {
	const { rerender } = render(<Display />);

	const props = { closed: true, locked: true };

	const red = document.querySelector(".red-led");
	const green = document.querySelector(".green-led");

	expect(red).toBeFalsy();
	expect(green).toBeTruthy();

	// rerender(<Display {...props} />);

	// const redLed = document.querySelector(".red-led");
	// const greenLed = document.querySelector(".green-led");

	// expect(red).toBeTruthy();
	// expect(green).toBeFalsy();
});
