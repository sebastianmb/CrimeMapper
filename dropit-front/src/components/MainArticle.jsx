

export const MainArticle = ({ imagen }) => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture className='block  h-full' >
        {/*<source media='(max-width: 600px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />*/}
        <img src={imagen} alt="image" className=' rounded-[10px] h-full object-cover' style={{ maxHeight: '500px', width: '100%' }}/>
      </picture>

    </section>
  )
}