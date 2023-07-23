import Courses from "./Courses";
import Angular from "./images/angular.png"
import Bootstrap from "./images/bootstrap.jpg"
import Developer from "./images/developer.png"
import Js from "./images/js.png"

function App() {
  return (
    <div className="App">
      
      <Courses
        title="Angular"
        description="
Note that the development build is not optimized.
To create a production build,"
      img = {Angular}
      
      />
      <Courses
        title="Bootstrap"
        description="İlk notunuzu oluşturmak için Yeni not oluştur kutusuna veya  düğmesine tıklayın ya da B tuşuna basın."
        img = {Bootstrap}
      />
      <Courses
        title="Javascript"
        description="Online bir video kurs oluşturun, dünyanın dört bir yanından öğrencilere ulaşın ve para kazanın"
        img = {Js}
      />
      <Courses
        title="Developer"
        description="Her gün öğrenmeye biraz zaman ayırmak sonuç verir. Araştırmalara göre öğrenimi alışkanlık haline getiren öğrencilerin hedeflerine ulaşma olasılığı daha fazladır. Öğrenmeye zaman ayırın ve öğrenim planlayıcınızı kullanarak hatırlatmalar alın."
        img = {Developer}
      />
    </div>
  );
}

export default App;
