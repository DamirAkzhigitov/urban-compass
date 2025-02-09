export type Overlay = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  previewUrl?: string;
  imageUrl?: string;
  tags?: string[];
  price?: number;
  rating?: number;
};
