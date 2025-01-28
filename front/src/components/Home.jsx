import { Header } from "./Header"
import { MainArticle } from "./MainArticle"
import { NewContainer } from "./NewContainer"



import imageDesktop from '../assets/images/Imageprincipal.jpg'











export function Home() {



  return (
    

      <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-3" >
        <Header />
        <div className="md:flex md:gap-40 md:mb-10">
          <NewContainer />
          <MainArticle imagen={imageDesktop} />

        </div>
       
       
        
      </main>

  
    
  )
}
