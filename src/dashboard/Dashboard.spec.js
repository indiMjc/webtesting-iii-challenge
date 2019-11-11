import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

test("Dashboard renders", () => {
	render(<Dashboard />);
});

test("Default state is unlocked and open", () => {
	const { getByText } = render(<Dashboard />);

	getByText(/unlocked/i);
	getByText(/open/i);
});
