import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
  }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found: typeof errors = {};

    if (name.trim().length < 3) found.name = 'Ad soyad en az 3 karakter olmalı.';
    if (!email.includes('@')) found.email = 'Geçerli bir e-posta girin.';
    if (password.length < 6) found.password = 'Şifre en az 6 karakter olmalı.';
    if (password !== passwordConfirm) found.passwordConfirm = 'Şifreler aynı değil.';

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <div className="sayfa-icerik">
      <h2 className="bolum-baslik">Kayıt Ol</h2>
      {sent ? (
        <p className="mesaj-basari">Kayıt başarılı (demo mod).</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="form-kapsayici">
          <div className="form-grup">
            <label htmlFor="reg-name">Ad Soyad</label>
            <input
              id="reg-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={errors.name ? true : undefined}
            />
            {errors.name && <span className="hata-metni">{errors.name}</span>}
          </div>

          <div className="form-grup">
            <label htmlFor="reg-email">E-posta</label>
            <input
              id="reg-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={errors.email ? true : undefined}
            />
            {errors.email && <span className="hata-metni">{errors.email}</span>}
          </div>

          <div className="form-grup">
            <label htmlFor="reg-pass">Şifre</label>
            <input
              id="reg-pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={errors.password ? true : undefined}
            />
            {errors.password && <span className="hata-metni">{errors.password}</span>}
          </div>

          <div className="form-grup">
            <label htmlFor="reg-pass2">Şifre (Tekrar)</label>
            <input
              id="reg-pass2"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              aria-invalid={errors.passwordConfirm ? true : undefined}
            />
            {errors.passwordConfirm && <span className="hata-metni">{errors.passwordConfirm}</span>}
          </div>

          <button type="submit" className="buton">Kayıt Ol</button>

          <div style={{ marginTop: '1rem' }}>
            <Link to="/login">Zaten hesabınız var mı? Giriş yapın</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegisterPage;