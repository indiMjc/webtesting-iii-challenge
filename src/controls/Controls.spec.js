import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

test("Controls render", () => {
	render(<Controls />);
});

test("Has buttons for open/close and lock/unlock", () => {
	const { getByText, rerender } = render(<Controls />);

	const props = { closed: true, locked: true };

	expect(getByText(/close gate/i)).toBeTruthy();
	expect(getByText(/lock gate/i)).toBeTruthy();

	rerender(<Controls {...props} />);

	expect(getByText(/open gate/i)).toBeTruthy();
	expect(getByText(/unlock gate/i)).toBeTruthy();
});

test("Closed toggle button disabled if gate is locked", () => {
	const { getByText, rerender } = render(<Controls />);

	const props = { closed: true, locked: true };

	const toggleLock = getByText(/lock gate/i);
	const toggleOpen = getByText(/close gate/i);

	expect(toggleLock.disabled).toBe(true);
	expect(toggleOpen.disabled).toBe(false);

	rerender(<Controls {...props} />);

	expect(toggleLock.disabled).toBe(false);
	expect(toggleOpen.disabled).toBe(true);
});
