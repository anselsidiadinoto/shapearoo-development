import { DesignerDesignItems } from '@/components/designer_components/navigation/DesignerDesignItems';

export function DesignerDesigns() {
  return (
    <div className='w-[717px] mx-auto mt-10 ]'>
      <div className='flex gap-3 border-b-[1px] w-full border-black p-2'>
        <div>active</div>
        <div>inactive</div>
      </div>
      <div className='w-full mt-4 flex flex-wrap gap-4 content-start'>
        <DesignerDesignItems />
        <DesignerDesignItems />
        <DesignerDesignItems />
        <DesignerDesignItems />
      </div>
    </div>
  );
}
