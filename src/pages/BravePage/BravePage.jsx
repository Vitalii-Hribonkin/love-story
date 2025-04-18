import { Link } from "react-router-dom";
import s from './BravePage.module.css';

export default function BravePage() {
  return (
    <div className={s.page}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>Ну що, ти все ще тут? Браво!</h1>
        <p className={s.subheading}>Не переживай, я теж безстрашний, я ж не трус!</p>

        <p className={s.body_text}>
          P.S. мені ще як страшно! 
        </p>

        <Link to="/third" className={s.next_button}>
          Продовжуємо цей шалений шлях... 🚀
        </Link>
      </div>
    </div>
  );
}
