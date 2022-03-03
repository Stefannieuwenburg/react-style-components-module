import ContentBtn from  "./Content.module.css";
// pas op er word veel gebruik gemaakt van styles
export default function Content() {
    return (
        <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum exercitationem ratione veniam quos, harum mollitia voluptas dicta, esse ex cupiditate accusamus explicabo eum qui distinctio repellendus praesentium sequi laboriosam.</p>
            <button className={ContentBtn.btn}>Read More</button>
        </div>
    )
}
