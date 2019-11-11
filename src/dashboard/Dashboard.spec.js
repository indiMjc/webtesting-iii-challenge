import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

test("Dashboard renders", () => {
	render(<Dashboard />);
});

test("Dashboard renders display and controls", () => {
	const wrap = render(<Dashboard />);

	const display = wrap.container.querySelector(".display");
	expect(display).toBeTruthy();

	const controls = wrap.container.querySelector(".controls");
	expect(controls).toBeTruthy();
});

test("Default state is unlocked and open", () => {
	const { getByText } = render(<Dashboard />);

	getByText(/unlocked/i);
	getByText(/open/i);
});
