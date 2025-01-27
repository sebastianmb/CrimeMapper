import { useEffect, useState } from "react"

import { Article } from "./Article"

import img1 from '../assets/images/schedule.png'
import img2 from '../assets/images/route.png'
import img3 from '../assets/images/salary.png'


  

export const ArticlesContainer = () => {


  return (
    <section className="text-cyan-900 md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center"> 

    {
      // articles.map(article => 
      //   <Article 
      //     key={article.publishedAt}
      //     img={article.urlToImage}
      //     number='01'
      //     title={article.title}
      //     text={article.description}
      //   />)
    }

      <Article
        img={img1}
        number='Nos ajustamos a tu tiempo'
        title='Agendamiento flexible para tus necesidades.'
        
      />
      <Article
        img={img2}
        number='Rastreo en tiempo real'
        title='Monitorea en vivo el progreso y ubicación'
        
      />
      <Article
        img={img3}
        number='Precio más económico'
        title='Ofrecemos tarifas competitivas que se ajustan a tu presupuesto'
        
      />

    </section>
  )
}