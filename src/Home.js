import Content from "./components/Content"
import Header from "./components/Header"
import Todo from "./components/Todo"




export default function Home() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Todo />
      
    </div>
  );
}


