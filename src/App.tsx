import NavBar from './components/NavBar'
import TextArea from './components/TextArea'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <TextArea />
      </main>
    </div>
  )
}

export default App
