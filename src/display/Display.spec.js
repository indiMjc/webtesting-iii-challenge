import React from "react";
import { render } from "@testing-library/react";
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
	const { getByText, rerender } = render(<Display />);

	const props = { closed: true, locked: true };

	const lockState = getByText(/unlocked/i);
	const openState = getByText(/open/i);

	expect(lockState.classList.value).toContain("green-led");
	expect(openState.classList.value).toContain("green-led");

	rerender(<Display {...props} />);

	expect(lockState.classList.value).toContain("red-led");
	expect(openState.classList.value).toContain("red-led");
});
