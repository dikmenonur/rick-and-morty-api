# Rick and Morty API Entegrasyonu ve Filtreleme

Bu proje, Rick and Morty API kullanarak karakterlerin listelendiği, `status` ve `gender` filtreleri ile süzülebilen, Server-Side Rendering (SSR) kullanan modern bir web uygulamasıdır. Proje, **Next.js 14**, **Tailwind CSS**, **TypeScript**, **Zustand**, ve **React Query** kullanılarak geliştirilmiştir.

## Teknolojiler

- **Next.js 15**: App folder yapısı ve SSR desteği.
- **Tailwind CSS**: Modern ve hızlı CSS framework.
- **TypeScript**: Statik tip denetimi.
- **Zustand**: Global state yönetimi.
- **React Query**: Veri fetching ve caching yönetimi.
- **shadcn/ui**: UI bileşenleri için modern ve temiz tasarım.

## Proje Yapılandırması

Bu proje, Rick and Morty API'sinden veri alarak karakterleri listeleyen bir uygulamadır. Kullanıcı, karakterleri `status` (canlı, ölü, bilinmeyen) ve `gender` (erkek, kadın, cinsiyetsiz, bilinmeyen) filtreleri ile süzebilir. Her iki filtre de URL query parametreleri üzerinden yönetilir ve entegre çalışır; yani örneğin `status=alive` ve `gender=male` seçildiğinde yalnızca bu kriterlere uyan karakterler görüntülenir.

- **SSR (Server-Side Rendering)**: Her sayfa değişiminde veriler sunucu tarafından getirilir.
- **URL Query Parametreleri**: Örneğin `?status=alive&gender=male` gibi parametreler kullanılarak sayfa yüklendikçe yeni veriler gelir ve UI güncellenir.

## Kurulum ve Çalıştırma

### Adımlar:

1. **Proje Bağımlılıklarını Yükleyin:**

   ```bash
   npm install
   ```

2. **Geliştirme Sunucusunu Başlatın:**

   ```bash
   npm run dev
   ```

   Bu komut, uygulamanızı `http://localhost:3000` adresinde çalıştıracaktır.

## Özellikler

### 1. Karakter Listeleme

Rick and Morty API kullanarak, karakterlerin tüm bilgilerini listeleyebilirsiniz. Karakterler aşağıdaki filtrelerle sıralanabilir:

- **Status**: Canlı, Ölü, Bilinmeyen
- **Gender**: Erkek, Kadın, Cinsiyetsiz, Bilinmeyen

Filtreleme işlemi URL query parametreleri üzerinden yapılır ve entegre çalışır.

### 2. Server-Side Rendering (SSR)

Sayfa değişikliklerinde, seçilen filtrelere göre veri almak için SSR kullanılır. Kullanıcı bir filtre seçtiğinde, URL'deki query parametreleri otomatik olarak güncellenir ve yeni veriler sunucudan alınarak sayfa yeniden yüklenir.

### 3. Global State Yönetimi

Zustand kullanarak, uygulamanın filtreleme durumunu global olarak yönetiyoruz. Bu, tüm bileşenlerin filtreleme verilerini paylaşmasına olanak tanır.

### 4. Veri Yönetimi ve API Çağrıları

React Query ile API çağrıları yönetilmektedir. Her sayfa veya filtreleme değişikliğinde, React Query gerekli verileri alır ve UI'yi günceller. Bu, performans optimizasyonu ve veri cacheleme sağlar.

## Kullanılan Kütüphaneler

- **Next.js 14**: Sunucu tarafı render için.
- **React Query**: API veri yönetimi.
- **Tailwind CSS**: Modern ve duyarlı tasarım.
- **Zustand**: Global state yönetimi.
- **shadcn/ui**: UI bileşenleri.
- **ESLint & Prettier**: Kod kalitesi ve formatlama.
- **Husky & Lint-Staged**: Commit öncesi otomatik lint ve format.

## Kod Kalitesi ve Ölçeklenebilirlik

- **ESLint & Prettier**: Kodun tutarlı ve okunabilir olması için ESLint ve Prettier kullanılmıştır.
- **Husky & Lint-Staged**: Commit öncesi otomatik linting ve formatlama işlemleri yapılır.
- **TypeScript**: TypeScript kullanılarak, tip güvenliği sağlanmıştır ve `any` kullanımından kaçınılmıştır.
- **React Query ve Zustand**: API çağrıları ve state yönetimi React Query ve Zustand ile yapılır, bu sayede kodun ölçeklenebilirliği ve yönetilebilirliği artırılmıştır.

## Kullanıcı Etkileşimi

- **Filtreleme**: Kullanıcı, karakterleri `status` ve `gender` filtreleriyle süzebilir. Filtreler, her değişiklikte URL query parametreleri olarak güncellenir ve sayfa yeniden render edilir.
- **Sayfa Geçişi ve SSR**: Her sayfa geçişinde, seçilen filtreler URL parametrelerinde saklanır ve React Query yeni verileri sunucu tarafında alır.

## Proje Yapısı

```plaintext
├── app/
│   ├── page.tsx               # Ana sayfa (SSR)
│   ├── filters/               # Filtreler bileşeni
│   ├── character-list/        # Karakter listeleme bileşeni
│   ├── pagination/            # Sayfalama bileşeni
│   ├── store/                 # Zustand store (state yönetimi)
│   └── api/                   # API çağrıları
│   └── components/             # Kullanıcı arayüzü bileşenleri
├── public/                    # Statik dosyalar
├── styles/                    # Tailwind CSS stil dosyaları
├── types/                     # TypeScript tip tanımları
├── .eslintrc.json              # ESLint yapılandırması
├── .prettierrc.json            # Prettier yapılandırması
└── package.json               # Proje bağımlılıkları
```

## Linting ve Formatlama

Bu proje, **ESLint** ve **Prettier** kullanarak kodun belirlenen kurallara uygun olmasını sağlar. Kodun her commit öncesi doğru formatta ve hata içermeyen şekilde olması için **Husky** ve **Lint-Staged** kullanılmıştır.

- **ESLint**: React Hooks, TypeScript, Tailwind CSS ve genel JavaScript kod standartları için ayarlanmıştır.
- **Prettier**: Kodun otomatik olarak formatlanmasını sağlar.
- **Husky & Lint-Staged**: Kod commit edilmeden önce otomatik olarak linting ve formatlama yapılır.

## Çalışma Prensibi

1. **Filtreleme**: Kullanıcı, filtreleme seçeneklerinden birini veya birden fazlasını seçtiğinde, filtreler URL query parametrelerine eklenir.
2. **SSR**: Filtreler değiştiğinde, Next.js sunucu tarafında yeni verileri alır ve sayfayı yeniden render eder.
3. **Veri Yönetimi**: React Query, API'den verileri çeker ve client-side'da gösterir. Zustand ise filtreleme verilerini global olarak yönetir.

## Sonuç

Bu proje, modern bir React uygulamasında SSR, API entegrasyonu, state yönetimi ve UI bileşenleri kullanımını gösteren kapsamlı bir örnek sunmaktadır. Filtreleme işlemleri ve veri yönetimi kullanıcı dostu bir deneyim sunmak için optimize edilmiştir.

---

Bu Markdown dosyasını GitHub'da `README.md` olarak kullanabilirsiniz. Projenizin dökümantasyonunu daha anlaşılır ve profesyonel hale getirecektir. 🚀
