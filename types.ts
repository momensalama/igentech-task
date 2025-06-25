export interface ServicePill {
  service_title: string;
  service_description: string;
  service_color: string;
  service_image: string;
  service_video: string;
  activeService?: boolean;
  hasSpace?: boolean;
}

export interface ServicePillComponentProps {
  pill: ServicePill;
  index: number;
  isActive: boolean;
  onClick: () => void;
}
