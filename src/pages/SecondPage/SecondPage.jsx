import { Link } from "react-router-dom";
import s from './SecondPage.module.css';

export default function SecondPage() {
  return (
    <div className={s.page}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>Ну шо, назад ходу нема 😈</h1>
        <h2 className={s.subtext}>
          Попереду невідоме... Можливо трошки страшно. Але саме там починається цікаве 😉
        </h2>
        <div className={s.button_group}>
          <Link to="/scared" className={s.option_button}>
            Страшно... але ідем далі 🚀
          </Link>
          <Link to="/brave" className={s.option_button}>
            Я безстрашен! Let's go 💪
          </Link>
        </div>
      </div>
    </div>
  );
}
