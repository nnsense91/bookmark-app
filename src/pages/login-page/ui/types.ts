import { ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  fieldName: string;
  labelName: string;
  title: string;
  hasError: boolean;
  value: string;
  changeFn: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  endIcon?: ReactNode;
  type?: string;
  error: string;
}
