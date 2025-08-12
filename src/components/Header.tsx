'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-border/50" style={{ backgroundColor: '#09090B' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">
              سامانه ثبت درخواست‌های مردمی
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              سیستم هوشمند طبقه‌بندی و مدیریت درخواست‌های شهروندی
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-blue-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-green-700 rounded-t-lg" 
                     style={{ 
                       clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 80%, 0 60%)' 
                     }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-800 rounded-b-lg"
                     style={{ 
                       clipPath: 'polygon(0 60%, 50% 80%, 100% 60%, 100% 100%, 0 100%)' 
                     }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
