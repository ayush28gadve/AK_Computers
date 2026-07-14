import {
  Award,
  Building2,
  Calendar,
  Cctv,
  CheckCircle,
  Clock,
  FileCheck,
  HardDrive,
  Headset,
  HeartHandshake,
  IndianRupee,
  Keyboard,
  Laptop,
  Monitor,
  MonitorCheck,
  Network,
  Phone,
  PhoneCall,
  Shield,
  Star,
  Wrench,
  Zap,
} from 'lucide-react';

const icons = {
  Award,
  Building2,
  Calendar,
  Cctv,
  CheckCircle,
  Clock,
  FileCheck,
  HardDrive,
  Headset,
  HeartHandshake,
  IndianRupee,
  Keyboard,
  Laptop,
  Monitor,
  MonitorCheck,
  Network,
  Phone,
  PhoneCall,
  Shield,
  Star,
  Wrench,
  Zap,
};

export default function Icon({ name, className = 'h-6 w-6', ...props }) {
  const LucideIcon = icons[name] ?? Wrench;
  return <LucideIcon className={className} aria-hidden="true" {...props} />;
}
