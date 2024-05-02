import { ShopNavigation } from '@/components/shop_components/navigation/ShopNavigation';

export default function ReportLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main_container">
      <ShopNavigation />
      {children}
    </div>
  );
}
