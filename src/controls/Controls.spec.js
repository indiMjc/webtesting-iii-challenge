import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(cleanup);

test("Controls render", () => {
	render(<Controls />);
});
