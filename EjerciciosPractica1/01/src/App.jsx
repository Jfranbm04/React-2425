
import Boton from '../src/components/boton'
import Imagen from '../src/components/imagen'
import Div from './components/Div'
import { MyHelloComponent } from './components/HelloComponent'
import Input from './components/Input'

const App = () => {
  return (
    <>
      <Boton />
      <Imagen />
      <MyHelloComponent />


      <Input />
      <Div text={Input.text} />
    </>
  )
}

export default App