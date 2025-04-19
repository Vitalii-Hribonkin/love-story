import { useState } from "react";
import Confetti from "react-confetti"; // Импортируем библиотеку для конфетти
import s from "./SixthPage.module.css";

export default function SixthPage() {
  const [noPosition, setNoPosition] = useState({ top: 50, left: 50 });
  const [showConfetti, setShowConfetti] = useState(false); // Состояние для показа конфетти

  const moveNoButton = () => {
    const top = Math.random() * 80;
    const left = Math.random() * 80;
    setNoPosition({ top, left });
  };

  const handleYesClick = () => {
    setShowConfetti(true); // Показываем конфетти при клике на "Так 💘"
    alert("Ты выбрал 'Да' 💖");
  };

  return (
    <div className={s.page}>
      <h1 className={s.heading}>Аллюсь, ти будеш моєю дівчиною? 💖</h1>

      <div className={s.button_group}>
        {/* Кнопка "Так 💘" с обработчиком клика */}
        <button className={s.yes_button} onClick={handleYesClick}>
          Так 💘
        </button>

        {/* Кнопка "Ні 😢", которая перемещается */}
        <button
          className={s.no_button}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{
            top: `${noPosition.top}%`,
            left: `${noPosition.left}%`,
          }}
        >
          Ні 😢
        </button>
      </div>

      {/* Конфетти, если кнопка "Так 💘" была нажата */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
}
