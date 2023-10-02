import { getBafici, novedafour, novedaone, novedathree } from '@/functions/Apigets'
import React from 'react'
import Separator from './Separator'
import ListMovies from './ListMovies'

const Sectioneigth = async () => {
    const bafici=await getBafici()
    const one=await novedaone()
    const four=await novedafour()
    const three=await novedathree()
  return (
    <div className='d-flex flex-column'>
           <Separator></Separator>
            <ListMovies titlesection={<p>FOCO EN FESTIVALES: VENECIA</p>} arraylistofmovies={bafici}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>FOCO EN FESTIVALES:<br></br> BAFICI</p>} arraylistofmovies={three}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>DEBUTS <span style={{visibility:"hidden"}}>ddjdjdjdjdjdjd</span> </p>} arraylistofmovies={one}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>ADAPTACIONES <span style={{visibility:"hidden"}}>ddjdjdjdjdjdjd</span> </p>} arraylistofmovies={four}></ListMovies>
    </div>
  )
}

export default Sectioneigth