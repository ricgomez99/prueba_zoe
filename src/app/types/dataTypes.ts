export type Advisor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  income: number;
};

export type CreateAdvisor = Omit<Advisor, "id">;
export type UpdateAdvisor = Partial<CreateAdvisor>;
