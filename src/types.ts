export interface FormData {
  name: string;
  phone: string;
  city: string;
  email?: string;
}

export interface LeadFormProps {
  slugs: string[];
  onSubmit: (data: FormData) => void;
}