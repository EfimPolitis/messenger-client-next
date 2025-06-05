import type { LucideIcon } from 'lucide-react';
import type { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';

// import type { IQueryParam } from '@/types/query.types'

interface IData {
  key: string;
  label: string;
}

export interface IFieldProps {
  data?: IData[];
  Icon?: LucideIcon;
  setState?: Dispatch<SetStateAction<string>>;
  initialValue?: string;
  // updateQueryParams?: (key: keyof IQueryParam, value: string) => void
  // queryKey?: keyof IQueryParam
  top?: number;
}

export type TypeInputSelectProps = InputHTMLAttributes<HTMLInputElement> &
  IFieldProps;
