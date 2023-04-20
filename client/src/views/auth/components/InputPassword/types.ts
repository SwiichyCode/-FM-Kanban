export interface InputProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string;
  register?: any;
  maxW?: number;
  type: string;
  required?: boolean;
}
