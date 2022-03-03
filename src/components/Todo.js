import TodoBtn from "./todo.module.css";
// pas op er word veel gebruik gemaakt van styles
export default function todo() {
    return (
        <section className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil a quos. Corporis aliquid asperiores, reiciendis obcaecati et ab iste debitis incidunt, unde cumque excepturi qui amet nostrum ipsam non?</p>
            <button className={TodoBtn.btn}>Read more</button>
        </section>
    )
}
