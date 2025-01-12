export interface KeyEventCardProps {
  imageSrc: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export interface AnalystBarProps {
  label: string;
  percentage: number;
  color: string;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  buttonText: string;
  background: string;
}

export interface SectionProps {
  title: string;
  content: string;
}

export interface DistributionItemProps {
  color: string;
  label: string;
  percentage: number;
}

export interface ChartLegendProps {
  items: DistributionItemProps[];
}

export interface TeamMemberProps {
  image: string;
  name: string;
  designation: string;
  description: string;
}

export interface TeamMemberCardProps {
  member: TeamMemberProps;
}