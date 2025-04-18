import { Link } from "react-router-dom";
import s from './ScaredPage.module.css';

export default function ScaredPage() {
  return (
    <div className={s.page}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>Мені самому кампот страшно 😨</h1>
        <h2 className={s.subtext}>
          Але вже як почали — то назад не повертаємось... <br />
          Погнали далі, хоч і з очима напівзаплющеними 👀
        </h2>
        <Link to="/third" className={s.try_again_button}>
          Окей... натискаю 😬
        </Link>
      </div>
    </div>
  );
}
