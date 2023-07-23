import Courses from "./Courses"

function App() {
  return (
    <div className="App">
      <Courses title="Angular" description="
Note that the development build is not optimized.
To create a production build,"/>
      <Courses title="Bootstrap" description="İlk notunuzu oluşturmak için Yeni not oluştur kutusuna veya  düğmesine tıklayın ya da B tuşuna basın."/>
      <Courses title="Javascript" description="Online bir video kurs oluşturun, dünyanın dört bir yanından öğrencilere ulaşın ve para kazanın"/>
      <Courses title="C++" description="Her gün öğrenmeye biraz zaman ayırmak sonuç verir. Araştırmalara göre öğrenimi alışkanlık haline getiren öğrencilerin hedeflerine ulaşma olasılığı daha fazladır. Öğrenmeye zaman ayırın ve öğrenim planlayıcınızı kullanarak hatırlatmalar alın."/>
      
    
    </div>
  )
}

export default App
