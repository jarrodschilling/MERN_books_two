import{BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Home from './views/Home'
import Error from './views/Error'
import BookDetails from './views/BookDetails'
import './App.css'

function App() {

  return (
    <div>
      {/* <h1>APP</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id/details" element={<BookDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
