'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-border/50" style={{ backgroundColor: '#FAFAFB' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Image src="/flag-rectangle.svg" alt="flag" width={50} height={50}/>
          <div className="flex-1 mr-6">
            <h1 className="text-2xl font-bold text-foreground">
              سامانه ثبت درخواست‌های مردمی
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              سیستم هوشمند طبقه‌بندی و مدیریت درخواست‌های شهروندی
            </p>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <div className="p-2">
                <img
                  src="/logo.png"
                  alt="System Logo"
                  className="w-20 h-20 object-contain drop-shadow-xl"
                  style={{
                    filter: 'brightness(1.2) contrast(1.3) saturate(1.1)',
                    maxWidth: '80px',
                    maxHeight: '80px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
