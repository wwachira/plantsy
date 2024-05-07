import Logo from "./components/Logo"
import AddPlant from "./components/AddPlant"
import Header from "./components/Header"
import SearchPlant from "./components/SearchPlant"
import PlantList from "./components/PlantList"

function App() {
  return (
    <main classNamme="px-10">
      <Header>Header</Header>
     <Logo />
     <AddPlant />
     <SearchPlant />
     <PlantList /> 
     </main>
  )
}

export default App
