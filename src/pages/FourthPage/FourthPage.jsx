import { Link } from "react-router-dom";
import s from "./FourthPage.module.css"; // Подключаем CSS-модуль

export default function FourthPage() {
  return (
    <div className={s.page}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>
          Ти велика молодчинка 🥰 Пройшла тестик!
        </h1>

        <p className={s.subtext}>
          Я знав, що ти все пам’ятаєш 💖 
          <br />
          Це тільки підтверджує, яка ти уважна та особлива для мене.
          <br />
          Тож, готова зробити ще один крок до нескінченності? 🌟
        </p>

        <Link to="/fifth" className={s.next_button}>
          Готова! 💌
        </Link>
      </div>
    </div>
  );
}
