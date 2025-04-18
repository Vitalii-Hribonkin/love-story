import { Link } from "react-router-dom";

export default function FourthPage() {
  return (
    <div className="page">
      <h1 className="center-text">А может мы…</h1>
      <Link to="/fifth" className="corner-link bottom-left">
        Закончим эту мысль 💞
      </Link>
    </div>
  );
}
