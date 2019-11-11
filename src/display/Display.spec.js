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

	rerender(<Display {...props} />);

	expect(lockState.textContent).toBe("Locked");
	expect(openState.textContent).toBe("Closed");
});
