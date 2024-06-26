import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  const count = useAppSelector((state) => state.counter.value)
  const Dispatch = useAppDispatch();

  return (
   <div className="h-screen w-full flex justify-center items-center">
    <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
      <button onClick={() => Dispatch(incrementByAmount(5))} className="px-3 py-2 rounded-md bg-green-500 text-xl text-white font-semibold mr-3">IncrementByAmount</button>
      <button onClick={() => Dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl text-white font-semibold">Increment</button>
      <h1 className="text-3xl mx-10">{count}</h1>
      <button onClick={() => Dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl text-white font-semibold">Decrement</button>
    </div>
   </div>
  )
}

export default App
