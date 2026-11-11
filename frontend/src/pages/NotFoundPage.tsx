import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="sayfa-icerik" style={{ textAlign: "center", padding: "3rem 1rem" }}>
      <h2 className="bolum-baslik" style={{ fontSize: "2rem" }}>404 - Sayfa Bulunamadı</h2>
      <p style={{ margin: "1rem 0" }}>Aradığınız sayfa veya etkinlik mevcut değil.</p>
      <Link to="/" className="buton">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

export default NotFoundPage;