
import { WrapTodo } from './Widget/WrapTodo/WrapTodo'
import styles from "../src/App/Styles/App.module.css"

function App() {
  return (
    <>
      <div className={styles.wrapApp} >
        <h1 className={styles.title}>todos</h1>
        <WrapTodo />
      </div>
    </>
  )
}

export default App
