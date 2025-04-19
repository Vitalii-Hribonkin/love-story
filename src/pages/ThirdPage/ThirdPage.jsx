import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import s from './ThirdPage.module.css';

export default function ThirdPage() {
  const [inputDate, setInputDate] = useState("");
  const [baptismDate, setBaptismDate] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [isCorrectDate, setIsCorrectDate] = useState(false);
  const [message, setMessage] = useState("");

  // Правильні відповіді
  const correctDate = "2022-10-15";
  const correctBaptismDate = "2023-04-23";
  const correctFavoriteMovie = "Як приборкати дракона";

  useEffect(() => {
    const savedDate = localStorage.getItem("inputDate");
    const savedBaptismDate = localStorage.getItem("baptismDate");
    const savedFavoriteMovie = localStorage.getItem("favoriteMovie");

    if (savedDate) setInputDate(savedDate);
    if (savedBaptismDate) setBaptismDate(savedBaptismDate);
    if (savedFavoriteMovie) setFavoriteMovie(savedFavoriteMovie);
  }, []);

  const handleDateChange = (e) => {
    const value = e.target.value;
    setInputDate(value);
    localStorage.setItem("inputDate", value);
  };

  const handleBaptismDateChange = (e) => {
    const value = e.target.value;
    setBaptismDate(value);
    localStorage.setItem("baptismDate", value);
  };

  const handleFavoriteMovieChange = (e) => {
    const value = e.target.value;
    setFavoriteMovie(value);
    localStorage.setItem("favoriteMovie", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (inputDate !== correctDate) {
      toast.error("Неправильна дата нашого знайомства 😕");
      hasError = true;
    }

    if (baptismDate !== correctBaptismDate) {
      toast.error("Неправильна дата мого хрещення 😕");
      hasError = true;
    }

    if (favoriteMovie.trim().toLowerCase() !== correctFavoriteMovie.toLowerCase()) {
      toast.error("Неправильний улюблений мультфільм 😕");
      hasError = true;
    }

    if (!hasError) {
      setIsCorrectDate(true);
      setMessage("Ти точно все пам’ятаєш! Продовжуємо далі 🎉");
      toast.success("Усі відповіді правильні! Молодець 😊");
    } else {
      setIsCorrectDate(false);
      setMessage("Є помилки у відповідях. Спробуй ще раз.");

      localStorage.removeItem("inputDate");
      localStorage.removeItem("baptismDate");
      localStorage.removeItem("favoriteMovie");

      setInputDate("");
      setBaptismDate("");
      setFavoriteMovie("");
    }
  };

  return (
    <div className={s.page}>
      <div className={s.content_wrapper}>
        <h1 className={s.main_heading}>Щоб продовжити, введи дані:</h1>

        <form onSubmit={handleSubmit} className={s.date_form}>
          <div className={s.inputWrapper}>
            <label>Дата нашого знайомства:</label>
            <input
              type="date"
              value={inputDate}
              onChange={handleDateChange}
              className={s.date_input}
              required
            />
          </div>

          <div className={s.inputWrapper}>
            <label>Дата мого хрещення:</label>
            <input
              type="date"
              value={baptismDate}
              onChange={handleBaptismDateChange}
              className={s.date_input}
              required
            />
          </div>

          <div className={s.inputWrapper}>
            <label>Мій улюблений мультфільм:</label>
            <input
              type="text"
              value={favoriteMovie}
              onChange={handleFavoriteMovieChange}
              className={s.date_input}
              placeholder="Напишіть вашу відповідь"
              required
            />
          </div>

          <button type="submit" className={s.submit_button}>Перевірити</button>
        </form>

        <p className={s.hint}>Формат: рік-місяць-день для дат та назва мультфільму на українській</p>
        <p className={s.interactiveText}>Щоб пройти далі, трохи інтерактиву!</p>
        <p className={s.message}>{message}</p>

        {isCorrectDate && (
          <Link to="/fourth" className={s.next_button}>
            Продовжити далі 🚀
          </Link>
        )}
      </div>
    </div>
  );
}
