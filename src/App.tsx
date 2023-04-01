import './App.css'
import Assistant from './components/assistant/Assistant'

export default function App() {
  return (
    <>
      <main className='container mx-auto'>
        <div className='flex flex-col gap-16 mx-4 xl:mx-72 my-16'>
          <Assistant />
        </div>
      </main>
    </>
  )
}