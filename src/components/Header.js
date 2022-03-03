import HeaderBtn from "./Header.module.css"
// pas op er word veel gebruik gemaakt van styles
export default function Header() {
    return (
        <div className="card">
            <h1>Main title</h1>
            <button className={HeaderBtn.btn}>Buy now</button>
        </div>
    );
}
