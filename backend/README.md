# Kampüs Etkinlik Backend API

## Çalıştırma Komutları

- Kurulum: npm install
- Geliştirme sunucusu: npm run dev
- Başlatma: npm start

## Ortam Değişkenleri (.env)

- PORT=3000 (Varsayılan sunucu portu. .env.example dosyasını .env olarak kopyalayın)

## REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GET | /health | Sunucu sağlık kontrolü | 200 | - | Bu sprint |
| GET | /events | Listeyi getir | 200 | - | Bu sprint |
| GET | /events/:id | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | /events | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | /events/:id | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | /events/:id | Sil | 204 | 404 | Sprint 9 |

### Hata Biçimi

{ "error": { "message": "Event not found" } }
