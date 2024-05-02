export function DesignerNavigation() {
  return (
    <div className='w-full flex flex-col font_primary mt-8 mb-6'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex items-end text-2xl mr-2 h-10 text-primary font-normal'>
              hi, Ansel
            </div>
            <div className='flex gap-2 items-end font_nav_inactive pb-[1px] font-bold'>
              <div className='font-light'>logout</div>
              <div>about</div>
              <div>help</div>
            </div>
          </div>
          <div className='flex gap-2 items-end font_nav_inactive'>
            <div>profile</div>
            <div>designs</div>
            <div>orders</div>
            {/* <div>messages</div> */}
          </div>
        </div>
        <div className='flex items-end text-primary text-3xl font-light tracking-tighter'>
          Shop @Shapearoo
        </div>
      </div>
    </div>
  );
}
