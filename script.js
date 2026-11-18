* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #ffffff;
  color: #171717;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

button, input, select, textarea {
  font: inherit;
}

.header {
  width: 100%;
  min-height: 76px;
  padding: 12px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #111;
  color: white;
  display: grid;
  place-items: center;
  font-size: 25px;
  border: 2px solid #b99a54;
}

.brand-text h2 {
  font-size: 19px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 1px;
}

.brand-text span {
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: 700;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 28px;
}

.navbar a {
  font-size: 13px;
  font-weight: 600;
  transition: .3s;
}

.navbar a:hover {
  color: #a88435;
}

.navbar .nav-book {
  background: #111;
  color: #fff;
  padding: 11px 20px;
  border-radius: 5px;
}

.menu-toggle {
  display: none;
  border: 0;
  background: none;
  font-size: 28px;
  cursor: pointer;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 35px;
  padding: 75px 7%;
  min-height: 520px;
}

.tag {
  display: inline-block;
  color: #a88435;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hero h1 {
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -2px;
}

.hero h1 span,
.section-heading h2 span,
.about-content h2 span {
  color: #ad8b47;
}

.hero-content > p {
  color: #777;
  font-size: 14px;
  margin: 20px 0;
  max-width: 460px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 13px 23px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid #111;
  cursor: pointer;
  text-align: center;
  transition: .3s;
}

.primary {
  background: #111;
  color: #fff;
}

.primary:hover {
  background: #ad8b47;
  border-color: #ad8b47;
}

.secondary {
  background: #fff;
  color: #111;
}

.secondary:hover {
  background: #111;
  color: #fff;
}

.hero-location {
  margin-top: 27px;
  font-size: 13px;
  color: #666;
}

.hero-image img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 12px;
}

.features {
  background: #f7f7f7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 32px 7%;
  text-align: center;
}

.feature span {
  font-size: 28px;
}

.feature h3 {
  font-size: 15px;
  margin: 5px 0;
}

.feature p {
  font-size: 12px;
  color: #777;
}

.cars-section,
.contact-section,
.booking-section {
  padding: 80px 7%;
}

.section-heading {
  text-align: center;
  margin-bottom: 40px;
}

.section-heading h2 {
  font-size: clamp(25px, 4vw, 36px);
  font-weight: 800;
  margin-bottom: 8px;
}

.section-heading p {
  color: #777;
  font-size: 13px;
}

.car-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.car-card {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  transition: .3s;
}

.car-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 35px rgba(0,0,0,.09);
}

.car-image {
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: #f2f2f2;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .4s;
}

.car-card:hover img {
  transform: scale(1.05);
}

.car-info {
  padding: 20px;
}

.car-info h3 {
  font-size: 19px;
  font-weight: 800;
}

.car-info p {
  font-size: 12px;
  color: #888;
  margin: 5px 0 13px;
}

.price {
  font-size: 23px;
  font-weight: 800;
  margin-bottom: 15px;
}

.price small {
  font-size: 12px;
  color: #888;
  font-weight: 500;
}
[11/18/2026 2:27 PM] Praveen Tiwari: .book-btn {
  width: 100%;
  background: #111;
  color: white;
  padding: 13px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
}

.book-btn:hover {
  background: #ad8b47;
}

.booking-section {
  background: #f7f7f7;
}

.booking-form {
  max-width: 550px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0,0,0,.05);
}

.booking-form label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  margin: 15px 0 7px;
}

.booking-form input,
.booking-form select,
.booking-form textarea {
  width: 100%;
  padding: 13px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
  outline: none;
  font-size: 13px;
}

.booking-form input:focus,
.booking-form select:focus,
.booking-form textarea:focus {
  border-color: #ad8b47;
}

.booking-form textarea {
  min-height: 85px;
  resize: vertical;
}

.form-submit {
  width: 100%;
  margin-top: 20px;
}

.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  align-items: center;
  padding: 80px 7%;
}

.about-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}

.about-content h2 {
  font-size: 35px;
  line-height: 1.25;
  margin-bottom: 18px;
}

.about-content p {
  font-size: 13px;
  color: #777;
  margin-bottom: 15px;
}

.about-content .btn {
  margin-top: 12px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.contact-card {
  padding: 30px 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
}

.contact-card span {
  font-size: 30px;
}

.contact-card h3 {
  font-size: 16px;
  margin: 10px 0 5px;
}

.contact-card p,
.contact-card a {
  font-size: 12px;
  color: #777;
  overflow-wrap: anywhere;
}

.footer {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 35px 15px;
}

.footer-logo {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.footer p {
  font-size: 11px;
  color: #bbb;
  margin: 8px 0;
}

.footer a {
  display: inline-block;
  color: #d8b66e;
  font-size: 12px;
  margin-top: 8px;
}

.whatsapp-float {
  position: fixed;
  right: 18px;
  bottom: 20px;
  width: 55px;
  height: 55px;
  background: #25d366;
  color: white;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 30px;
  font-weight: 700;
  box-shadow: 0 4px 15px #0003;
  z-index: 999;
}

/* MOBILE DESIGN */
@media (max-width: 768px) {

  .header {
    padding: 10px 5%;
    min-height: 68px;
  }

  .brand-text h2 {
    font-size: 16px;
  }

  .brand-text span {
    font-size: 9px;
  }

  .menu-toggle {
    display: block;
  }

  .navbar {
    display: none;
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    border-bottom: 1px solid #eee;
  }

  .navbar.active {
    display: flex;
  }

  .navbar a {
    padding: 5px;
  }

  .navbar .nav-book {
    text-align: center;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 45px 6%;
    gap: 30px;
  }

  .hero h1 {
    font-size: 38px;
  }

  .hero-image img {
    height: 230px;
  }

  .features {
    padding: 25px 4%;
    gap: 10px;
  }

  .feature h3 {
    font-size: 12px;
  }

  .feature p {
    font-size: 10px;
  }

  .cars-section,
  .contact-section,
  .booking-section {
    padding: 55px 5%;
  }

  .car-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .car-image {
    height: 135px;
  }

  .car-info {
    padding: 12px;
  }

  .car-info h3 {
    font-size: 14px;
  }

  .car-info p {
    font-size: 10px;
    min-height: 30px;
  }

  .price {
    font-size: 19px;
  }

  .price small {
    font-size: 10px;
  }

  .book-btn {
    font-size: 10px;
    padding: 11px 5px;
  }

  .about-section {
    grid-template-columns: 1fr;
    padding: 55px 6%;
    gap: 25px;
  }

  .about-image img {
    height: 230px;
  }
[11/18/2026 2:27 PM] Praveen Tiwari: .about-content h2 {
    font-size: 29px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .booking-form {
    padding: 20px;
  }
}

@media (max-width: 360px) {
  .hero h1 {
    font-size: 32px;
  }

  .car-grid {
    gap: 8px;
  }

  .car-info {
    padding: 9px;
  }
}
