import React, { useReducer, useMemo, useCallback } from "react";
import { rommelMeldenReducer, SET_STEP } from "./RomelMeldenContext";

const useWizardLogic = () => {
  const [state, dispatch] = useReducer(rommelMeldenReducer, { step: 1 });

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  const gotoStep:
    | ((
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        step: number
      ) => void)
    | undefined = useCallback((event, step) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: SET_STEP, payload: step });
  }, []);

  return {
    step: contextValue.state.step,
    gotoStep
  };
};

export default useWizardLogic;
