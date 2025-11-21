# Supabase Setup Guide

## الجداول المطلوبة في Supabase

### 1. جدول Projects (المشاريع)

أنشئ جدول باسم `projects` بالحقول التالية:

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT, -- مثال: "Vue, Tailwind, Supabase"
  live_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**الحقول:**
- `id`: معرف فريد للمشروع
- `title`: عنوان المشروع (مطلوب)
- `description`: وصف المشروع
- `image_url`: رابط صورة المشروع
- `technologies`: التقنيات المستخدمة (مفصولة بفواصل)
- `live_url`: رابط المشروع المباشر
- `github_url`: رابط GitHub للمشروع
- `created_at`: تاريخ الإنشاء

### 2. جدول Contacts (رسائل التواصل)

أنشئ جدول باسم `contacts` بالحقول التالية:

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**الحقول:**
- `id`: معرف فريد للرسالة
- `name`: اسم المرسل (مطلوب)
- `email`: البريد الإلكتروني (مطلوب)
- `message`: نص الرسالة (مطلوب)
- `created_at`: تاريخ الإرسال

## إعدادات Row Level Security (RLS)

### للجدول projects:
```sql
-- السماح للجميع بقراءة المشاريع
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);
```

### للجدول contacts:
```sql
-- السماح للجميع بإرسال رسائل
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT WITH CHECK (true);
```

## متغيرات البيئة (.env)

تأكد من إضافة المتغيرات التالية في ملف `.env`:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## ملاحظات

- تأكد من تفعيل RLS (Row Level Security) على الجداول
- يمكنك إضافة المزيد من الحقول حسب احتياجاتك
- يمكنك تعديل السياسات (Policies) حسب متطلبات الأمان الخاصة بك

