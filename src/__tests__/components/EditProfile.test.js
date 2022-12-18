import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../utils/utils-for-tests";
import EditProfile from "../../components/Settings/EditProfile/EditProfile";
import {getStatus, updateStatus } from '../../redux/slices/settings-slice'

describe("EditProfile | Component", () => {
  // Todo: test state by mocking useState using Enzyme

  test("status should be set in corresponding field", () => {
    render(<EditProfile status="123" />);
    const status = screen.getByDisplayValue("123");
    expect(status).toBeInTheDocument();
  });

  test("status input value should be the same after losing focus", async () => {
    const dispatch = jest.fn()
    // renderWithProviders(<EditProfile status={'test status'} />)
    // const status = screen.getByDisplayValue('test status');
    // status.focus();
    // expect(status).toHaveFocus();



    const thunk = updateStatus()
    await thunk(dispatch, )
    userEvent.tab();
    // expect(status).not.toHaveFocus();
  });

});
