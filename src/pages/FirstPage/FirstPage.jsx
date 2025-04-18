import { Link } from "react-router-dom";
import s from "./FirstPage.module.css";

export default function FirstPage() {
  return (
    <div className={s.page_wrapper}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>Привіт Аллюська</h1>
        <h2 className={s.h_two}>Якщо хочеш дізнатись, що буде далі — тисни кнопку нижче. А якщо ні… то ти точно щось втрачаєш 😉</h2>
        <Link to="/second" className={s.main_button}>
           Погнали далі 🚀
        </Link>
      </div>
    </div>
  );
}
