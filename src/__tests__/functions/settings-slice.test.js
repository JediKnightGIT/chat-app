import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../utils/utils-for-tests";
import EditProfile from "../../components/Settings/EditProfile/EditProfile";
import settingsSlice, { initialState, setStatus, getStatus, updateStatus } from '../../redux/slices/settings-slice'

describe("settingsSlice", () => {
  test("initialize slice with initialValue", () => {
    const settingsSliceInit = settingsSlice(initialState, { type: 'unknown' });
    expect(settingsSliceInit).toBe(initialState);
  });

  test("setStatus reducer", () => {
    const testData = 'Hello, brutal world'

    const afterReducerOperation = settingsSlice(
      initialState,
      setStatus(testData)
    );

    expect(afterReducerOperation).toStrictEqual({
      status: testData,
    });
  });
});

