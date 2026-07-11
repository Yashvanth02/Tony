export interface Project {
  id: string;
  title: string;
  category: 'commercial' | 'brand_film' | 'product' | 'digital_content';
  categoryLabel: string;
  image: string;
  description: string;
  longDescription: string;
  client: string;
  year: string;
  director: string;
  runtime?: string;
  aspectRatio?: string;
  equipment?: string[];
  metrics?: { label: string; value: string }[];
  credits?: { role: string; name: string }[];
}

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  extendedDescription: string;
  deliverables: string[];
}

export interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitial: string;
}
