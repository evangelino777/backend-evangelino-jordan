# backend-evangelino-jordan

# Marketplace API

Marketplace API adalah sebuah aplikasi backend yang dibangun menggunakan Express.js, mengikuti pola desain MVC, dan menggunakan PostgreSQL dengan Prisma ORM. Aplikasi ini menyediakan API RESTful untuk mengelola produk dan pesanan, serta mendukung otentikasi JWT untuk keamanan.

## Fitur

- **CRUD Produk**:
  - **POST /product**: Menambahkan produk baru.
  - **GET /product**: Mendapatkan daftar semua produk.
  - **PUT /product/:id**: Memperbarui informasi produk berdasarkan id produk.
  - **DELETE /product/:id**: Menghapus produk berdasarkan id produk.
- **Pembelian Produk**:
  - **POST /product/buy**: Membeli produk dengan fitur diskon dan gratis ongkir.
- **Daftar Customer**:
  - **GET /product/customer**: Mendapatkan daftar nama customer dari tabel order.
- **Otentikasi**:
  - **GET /token**: Mendapatkan token JWT untuk akses API.

## Instalasi

1. Clone repository:
   ```bash
   git clone git@github.com:evangelino777/backend-evangelino-jordan.git
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Buat file .env di root direktori dan sesuaikan nilai variabel berikut:
   ```bash
   DATABASE_URL=mysql://username:password@localhost:3306/databaseName
   SECRET_KEY=your_jwt_secret_key
   PORT=3000
   ```
4. Inisialisasi Prisma (pastikan sudah ada database "databaseName" sesuai .env):
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```
5. Jalankan server dengan nodemon:
   ```bash
   npm start
   ```

## Penggunaan API

1. Generate JWT Token
   ```bash
   GET /token
   ```
2. Menambahkan Produk
   ```bash
   POST /product
   Header: Authorization: Bearer <token>
   Body: { "name": "Product A", "price": 20000 }
   ```
3. Melihat Daftar Produk
   ```bash
   GET /product
   Header: Authorization: Bearer <token>
   ```
4. Mengupdate Produk
   ```bash
   PUT /product/:id
   Header: Authorization: Bearer <token>
   Body: { "name": "Product A", "price": 25000 }
   ```
5. Menghapus Produk
   ```bash
   DELETE /product/:id
   Header: Authorization: Bearer <token>
   ```
6. Membeli Produk
   ```bash
   POST /product/buy
   Header: Authorization: Bearer <token>
   Body: { "productId": 1, "productName": "Product A", "price": 20000, "customerName": "John Doe" }
   ```
7. Melihat Daftar Customer
   ```bash
   GET /product/customer
   Header: Authorization: Bearer <token>
   ```

## Struktur Tabel dan Database

### Tabel Product

Tabel product menyimpan informasi tentang produk yang tersedia di marketplace.
Berikut daftar kolomnya :

- id: Primary key, auto-incremented integer, unik untuk setiap produk.
- name: Nama produk, tipe data string.
- price: Harga produk, tipe data float.

### Tabel Order

Tabel order menyimpan informasi tentang pesanan yang dibuat oleh pelanggan.
Berikut daftar kolomnya :

- id: Primary key, auto-incremented integer, unik untuk setiap pesanan.
- productId: Foreign key yang merujuk ke id di tabel product, tipe data integer.
- productName: Nama produk, tipe data string.
- price: Harga produk pada saat pembelian, tipe data float.
- customerName: Nama customer yang membuat pesanan, tipe data string.
- totalPrice: Total harga pesanan setelah diskon (jika ada), tipe data float.
