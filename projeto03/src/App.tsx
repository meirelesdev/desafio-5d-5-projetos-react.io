import { useState, useEffect, FormEvent } from 'react'
import * as C from './App.styles'
import * as Photos from './services/photos'
import { Photo } from './types/Photo'
import  { PhotoItem } from './components/PhotoItem'

const App = () => {
  const [ uploading, setUploading ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ data, setData ] = useState<Photo[]>([]) 

  useEffect(()=>{
    getPhotos()
  }, [])
  const getPhotos = async () => {
    setLoading(true)
    setData(await Photos.getAll())
    setLoading(false)
  }
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File;
    if(file && file.size > 0) {
      setUploading(true)
      const result = await Photos.insert(file)
      setUploading(false)
      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
        return
      }
      setData([...data, result])
    }
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          {!uploading && 
            <input type="submit" value="Enviar" />}
          {uploading && "Enviando..."}
        </C.UploadForm>
        {loading &&
          <C.ScreenWarning>
            <div className="emoji">🤚</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }
        {!loading && data.length > 0 &&
          <C.PhotoList>
            {data.map((item, index)=>(
              <PhotoItem
                key={index}
                name={item.name}
                url={item.url}
                 />
            ))}
          </C.PhotoList>
        }
        {!loading && data.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😞</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  )
}
export default App;