import { FC, useCallback } from "react";
import { Title } from "../Title";
import { useAppDispatch } from "../../hooks";
import {
  AirtimeStateType,
  addOperator,
} from "../../state/slices/airtimeOrderSlice";

export interface Operator {
  name: string;
  logoUrl: string;
}

interface Props {
  operators: Operator[];
}

export const AirtimeOperators: FC<Props> = ({ operators }) => {
  const dispatch = useAppDispatch();

  const onOperatorSelect = useCallback(
    (operator: Operator) => {
      dispatch(addOperator({ operator } as AirtimeStateType));
    },
    [dispatch]
  );

  return (
    <>
      <Title className="my-5">Select service provider</Title>
      <div className="grid gap-y-1.5">
        {operators.map((operator) => (
          <button
            key={operator.name}
            onClick={() => onOperatorSelect(operator)}
            className="flex justify-between items-center p-3 bg-white border hover:border-blue rounded-lg"
          >
            <div>{operator.name}</div>
            <img className="h-6 text-grey bg-grey" src={operator.logoUrl} />
          </button>
        ))}
      </div>
    </>
  );
};
