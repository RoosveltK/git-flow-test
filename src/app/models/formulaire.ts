export interface Formulaire {
  id?: number;
  name: string;
  label: string;
  placeholder?: string;
  type: string;
}

export interface BtnOption {
  label: string;
  isSubmit: boolean;
}
