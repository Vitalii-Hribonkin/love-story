import { useState } from "react";
import { Link } from "react-router-dom";
import s from './ThirdPage.module.css';

export default function ThirdPage() {
  const [inputDate, setInputDate] = useState("");
  const [isCorrectDate, setIsCorrectDate] = useState(false);
  const [message, setMessage] = useState("");

  // Точная дата знакомства (пример)
  const correctDate = "2023-10-15"; // Пример даты, измените на нужную

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputDate === correctDate) {
      setIsCorrectDate(true);
      setMessage("Ти точно пам'ятаєш! Продовжуємо далі 🎉");
    } else {
      setIsCorrectDate(false);
      setMessage("Неправильна дата! Спробуй ще раз.");
    }
  };

  return (
    <div className={s.page}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>Щоб продовжити, введи дату нашого знайомства:</h1>

        <form onSubmit={handleSubmit} className={s.date_form}>
          <input
            type="date"
            value={inputDate}
            onChange={handleDateChange}
            className={s.date_input}
            required
          />
          <button type="submit" className={s.submit_button}>Перевірити</button>
        </form>

        <p className={s.hint}>Формат: рік-місяць-день (наприклад, 2023-10-15)</p>
        <p className={s.message}>{message}</p>

        {/* Добавляем текст "щоб пройти далі трохи інтерактиву" */}
        <p className={s.interactiveText}>Щоб пройти далі, трохи інтерактиву!</p>

        {isCorrectDate && (
          <Link to="/fourth" className={s.next_button}>
            Продовжити далі 🚀
          </Link>
        )}
      </div>
    </div>
  );
}
