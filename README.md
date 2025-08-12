# اپلیکیشن طبقه‌بندی متن

یک اپلیکیشن Next.js برای طبقه‌بندی متن با استفاده از فناوری‌های مدرن وب.

## ویژگی‌ها

- طبقه‌بندی متن با استفاده از مدل‌های هوش مصنوعی/یادگیری ماشین
- نتایج پیش‌بینی در زمان واقعی
- رابط کاربری مدرن با Tailwind CSS و shadcn/ui
- Redux Toolkit برای مدیریت state
- React Hook Form برای مدیریت فرم‌ها
- TypeScript برای امنیت نوع داده

## فناوری‌های استفاده شده

- **فریم‌ورک**: Next.js 14
- **استایل‌دهی**: Tailwind CSS
- **کامپوننت‌های UI**: shadcn/ui
- **مدیریت state**: Redux Toolkit
- **فرم‌ها**: React Hook Form با اعتبارسنجی Zod
- **کلاینت HTTP**: Axios
- **TypeScript**: امنیت کامل نوع داده

## شروع کار

### پیش‌نیازها

- Node.js 18+ 
- npm، yarn، یا pnpm

### نصب

1. کلون کردن مخزن:
```bash
git clone <repository-url>
cd simple-fetch-react
```

2. نصب وابستگی‌ها:
```bash
npm install
# یا
yarn install
# یا
pnpm install
```

3. اجرای سرور توسعه:
```bash
npm run dev
# یا
yarn dev
# یا
pnpm dev
```

4. باز کردن [http://localhost:3000](http://localhost:3000) در مرورگر.

## اسکریپت‌های موجود

- `npm run dev` - شروع سرور توسعه
- `npm run build` - ساخت برای تولید
- `npm run start` - شروع سرور تولید
- `npm run lint` - اجرای ESLint

## ساختار پروژه

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # لایوت اصلی
│   ├── page.tsx           # صفحه اصلی
│   └── globals.css        # استایل‌های عمومی
├── src/
│   ├── components/        # کامپوننت‌های React
│   ├── hooks/            # هوک‌های سفارشی
│   ├── lib/              # توابع کمکی
│   └── store/            # استور Redux
├── public/               # فایل‌های استاتیک
└── package.json          # وابستگی‌ها و اسکریپت‌ها
```

## یکپارچه‌سازی API

این اپلیکیشن با یک endpoint طبقه‌بندی متن یکپارچه می‌شود:
- **Endpoint**: `https://request-classification.farazpardazan.com/classify`
- **Method**: POST
- **Body**: `{ text: string }`

## توسعه

این پروژه از موارد زیر استفاده می‌کند:
- **Next.js App Router** برای مسیریابی
- **TypeScript** برای امنیت نوع داده
- **ESLint** برای بررسی کد
- **Tailwind CSS** برای استایل‌دهی
- **shadcn/ui** برای کامپوننت‌های UI

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.
