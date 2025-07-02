type CategoryTypes = {
  first: 'Категория_1';
  second: 'Категория_2';
  third: 'Категория_3';
};

export type RequestType = {
  id: string;
  name: string;
  description: string;
  category: CategoryUnion;
  createdAt: Date;
};

export type CategoryUnion = CategoryTypes[keyof CategoryTypes];
