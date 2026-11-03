import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found: { email?: string; password?: string } = {};

    if (!email.includes('@')) found.email = 'Geçerli bir e-posta girin.';
    if (password.length < 6) found.password = 'Şifre en az 6 karakter olmalı.';

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <div className="sayfa-icerik">
      <h2 className="bolum-baslik">Giriş Yap</h2>
      {sent ? (
        <p className="mesaj-basari">Giriş başarılı (demo mod).</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="form-kapsayici">
          <div className="form-grup">
            <label htmlFor="login-email">E-posta</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={errors.email ? true : undefined}
            />
            {errors.email && <span className="hata-metni">{errors.email}</span>}
          </div>

          <div className="form-grup">
            <label htmlFor="login-pass">Şifre</label>
            <input
              id="login-pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={errors.password ? true : undefined}
            />
            {errors.password && <span className="hata-metni">{errors.password}</span>}
          </div>

          <button type="submit" className="buton">Giriş</button>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '15px' }}>
            <Link to="/forgot-password">Şifremi Unuttum</Link>
            <Link to="/register">Kayıt Ol</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPage;