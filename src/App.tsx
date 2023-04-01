import './App.css'
import Assistant from './components/assistant/Assistant'

export default function App() {
  return (
    <>
      <main className='container mx-auto'>
        <div className='flex flex-col gap-16 mx-4 xl:mx-72 my-16'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Welcome to <span className='underline'>Marlow AI</span> - You AI-powered code review assistant.</h1>
            <p className='text-slate-500'>We are currently in <span className='font-bold'>BETA</span>.</p>
            <p className='text-slate-500'>Paste your code below and our AI will complete a code review. 🤖</p>
            <p className='text-slate-500'>Github integration coming soon. 🔥</p>
          </div>

          <Assistant />
        </div>
      </main>
    </>
  )
}