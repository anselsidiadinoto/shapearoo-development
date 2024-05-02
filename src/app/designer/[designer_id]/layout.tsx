import { DesignerNavigation } from '@/components/designer_components/navigation/DesignerNavigation';

export default function ReportLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='main_container'>
      <DesignerNavigation />
      {children}
    </div>
  );
}
