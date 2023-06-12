export type SectionProps = {
  id: string;
  title: string;
  bgColor: string;
};

export const sections: SectionProps[] = [
  {
    id: 'hello',
    title: 'Hello',
    bgColor: 'bg-green-800',
  },
  {
    id: 'szia',
    title: 'Szia',
    bgColor: 'bg-green-600',
  },
  {
    id: 'szervusz',
    title: 'Szervusz',
    bgColor: 'bg-green-400',
  },
];
