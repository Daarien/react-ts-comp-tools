import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export type ErrorResponse = {
  status: number;
  error: string;
  message: string;
  path: string;
  timestamp: string;
};

export type TQueryParams = {
  pageNumber: number;
  pageSize: number;
};

export type TPagerParams = {
  pageNumber: number;
  pageSize: number;
  total: number;
  pages: number;
};
