import TasksProvider from "@/taskcontext";
import List from "./components/list";

export default function Home() {

  return (
    <TasksProvider>
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <div className="shadow-xl rounded-xl p-4 min-h-[65%] min-w-[35%]">
          <List/>
        </div>
      </section>
    </TasksProvider>
  )
}