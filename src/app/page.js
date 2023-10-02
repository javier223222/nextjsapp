
import PrincipalNav from '@/componets/PrincipalNav';


import Carrosuel from '@/componets/Carrosuel';
import Separator from '@/componets/Separator';
import axios from 'axios';
import ListMovies from '@/componets/ListMovies';
import { FATIHAKIN, Fatihantwo, externapi, fatinkan, getBafici, malas, novedadeigth, novedadeseven, novedadesfive, novedadessix, novedafour, novedaone, novedathree, novedatwo } from '../functions/Apigets';
import Sectioneigth from '@/componets/Sectioneigth';
import ImageBase from '@/componets/ImageBase';
import Starts from '@/componets/Starts';
import { Spline_Sans_Mono } from 'next/font/google';
import ButtonReui from '@/componets/ButtonReui';
import ButtonBlack from '@/componets/ButtonBlack';
import Star from '@/componets/Star';
import CarrosuelOfCards from '@/componets/CarrosuelOfCards';
import CarrouselTwoImages from '@/componets/CarrouselTwoImages';
import Apiselect from '@/componets/Apiselect';

const  Home=async()=> {
  const bafici=await getBafici()
  const one=await novedaone()
const two=await novedatwo()
const three=await novedathree()
const four=await novedafour()
const five=await novedadesfive()
const six =await novedadessix()
const seven=await novedadeseven()

const eight=await novedadeigth()
const   fatihank=await fatinkan()
const fatihanktwo=await Fatihantwo()
const malast=await malas()
const externapia=await externapi()
console.log(externapia)
  return (
    <main className='containerprncipal'>
      <PrincipalNav></PrincipalNav>
        <Separator></Separator>
        <div style={{
  backgroundImage:"url('https://images.mubicdn.net/images/carousel_takeover/183/cache-908840-1695815171/short_desktop_image_es_419-optimized.jpg?size=1280x')",
 
}} className='newanunc d-flex ' >
  <div  className='d-flex gap-3 align-items-start flex-column pasages'>
    <h4 className='text-start tm'>DISPONIBLE EL 06 DE OCTUBRE</h4>
    <div className='d-flex flex-column'>
     <img className='tittlepageestr' src='https://images.mubicdn.net/images/carousel_takeover/183/cache-908839-1695815171/short_banner_title_treatment_image_es_419-original.png'></img>
     <div className='d-flex gap-1'>
      <p>UNA PELICULA DE </p>
      <span className='resalt'>IRA SACHIS</span>
     
     </div>
      <ButtonBlack></ButtonBlack>
    </div>
    
  </div>
  <div className='d-flex gap-3 flex-column justify-content-end align-items-end colorpar'>
  <img className='logosunbdance ' src='https://images.mubicdn.net/images/carousel_takeover/183/cache-908837-1695815170/prize_image_es_419-original.png?size=200x'></img>
  <div className='d-flex flex-column'>
   <div className='d-flex'>
    <Star></Star>
    <Star></Star>
    <Star></Star>
    <Star></Star>
    <Star></Star>
   </div>
 
  <span  className='text-end rol'>THE IRISH TIMES</span>
  </div>
  
  <div className='d-flex flex-column'>
  <h3 className='tittleprinciofes'>{`UNA DE LAS MEJORES PELICULAS DEL ANIO`}</h3>
  <span className='text-end rol'> ROLLING STONE</span>
  </div>
 
  </div>

 
</div>
<Separator></Separator>
           <Carrosuel tittlemovie1="LISTEN UP PHILIP" direct1="Alex Ross Perry"
            daterelate1="Estados Unidos, 2014" 
            sinopsisMovie1="En esta comedia negra de Alex Ross Perry, Jason Schwartzman, Elisabeth Moss y Jonathan Pryce protagonizan una historia que toma giros ricos y sorprendentes. Un comentario sobre la repugnante y narcisista figura del escritor repleto de un humor brutalmente ácido que esconde reflexiones más profundas."
            tittlemovie2="ASESINATO EN EL ORIENT EXPRESS"
            direct2="Sidney Lumet"
            daterelate2="Reino Unido, 1974"
            sinopsisMovie2="Todos a bordo, Sidney Lumet vuelve a adentrarse en el género de intriga criminal. Esta suntuosa adaptación de la novela de Agatha Christie está protagonizada por Albert Finney haciedno del indomable Hércules Poirot y un reparto de lujo: ¡Lauren Bacall, Sean Connery, Anthony Perkins e Ingrid Bergman!"

            tittlemovie3="THE COWBOY AND THE FRENCHMAN"
            direct3="David Lynch"
            daterelate3="Estados Unidos, 1988"
            sinopsisMovie3="Frena tu caballo, compa! Leíste bien, esta profundidad es obra del único e inigualable David Lynch, con una actuación torpe y encantadora de Harry Dean Stanton: una comedia miniatura que mezcla el espíritu estadounidense con el garbo francés en un espectáculo digno de la Estatua de la Libertad."
            tittlemovie4="LA VIDA ME MATA"
            direct4="Sebastián Silva"
            daterelate4="Chile, 2007"
            sinopsisMovie4="Tras años de experiencia en el arte y la música, Sebastián Silva hizo su ópera prima, una original metacomedia llena de detalles absurdos y actuaciones fantásticas. En esta mirada surrealista al arte y la mortalidad, la vida se sumerge en blanco y negro, mientras que el color le pertenece al cine."
           urlfour="https://images.mubicdn.net/images/film/36651/cache-26473-1693309893/image-w1280.jpg?size=600x" 
           urlthree="https://images.mubicdn.net/images/film/40981/cache-113573-1693307163/image-w1280.jpg?size=800x" twoo="https://images.mubicdn.net/images/film/5722/cache-11004-1481130984/image-w1280.jpg?size=800x" urlone="https://images.mubicdn.net/images/film/112798/cache-88998-1612374885/image-w1280.jpg?size=600x" ></Carrosuel> 
<Separator></Separator>

  
<CarrosuelOfCards one={one} two={two} three={three}
 four={four} five={five} six={six} seven={seven} eigth={eight} titlesection="Novedades en MUBI" ></CarrosuelOfCards>


 <Separator></Separator>

<ImageBase componets={
  <>
  <div className='carnuev movemubi gap-2 d-flex flex-column m-4'>
    <img src='https://images.mubicdn.net/images/artworks/464588/cache-464588-1652037888/images-original.png?size=420x' className='imagenew'></img>
    <p className='selection text-start'>Nuestra colección exclusiva de aclamados estrenos de algunos de nuestros cineastas en activo favoritos. Solo en MUBI.</p>
  </div>
<div className='d-flex   justy-content-end align-items-end carnuev carruselaftesun'>
<CarrosuelOfCards controls={false} one={one} two={two} three={three}
 four={four} five={five} six={six} seven={seven} eigth={eight} ></CarrosuelOfCards>
</div></>} urlimage="https://images.mubicdn.net/images/film_group/1128/cache-779611-1691678105/image-original.jpg?size=1280x"></ImageBase>
<Separator></Separator>
<ImageBase
componets={
  <>
  <div className='carnuev d-flex flex-column m-4 gap-3 movemubi '>

    <div className='akinse'>
    <h2 className="text-start ezl1qgr6 css-1ym9gvv e7yvke70" style={{color:"#ffffff"}} >CINE DEL ALMA: </h2>
   <h2 className="text-start  ezl1qgr6 css-1iepvxj e7yvke70"style={{color:"#ecdcc5"}} >PELÍCULAS DE FATIH AKIN</h2>
   
    </div>
    <p>El cine de Fatih Akin, que traspasa las fronteras alemanas, se basa en la memoria, el lenguaje y la música. Estas películas, políticamente comprometidas y cinematográficamente sublimes, redefinen nuestra forma de entender el cine nacional pintando una fascinante visión de la interconexión global.</p>

  </div>
  <div className='d-flex   justy-content-end align-items-end carnuev carruselafatiha'>
  <CarrouselTwoImages controls={false} one={fatihank} two={fatihanktwo}  ></CarrouselTwoImages>
  </div>
  
  </>
} urlimage="https://images.mubicdn.net/images/film_group/1468/cache-903173-1693482705/image-original.png?size=1280x"></ImageBase>
<Separator></Separator>
<ImageBase
componets={<>
  <div className='carnuev d-flex flex-column m-4 gap-3 movemubi '>

    <div className='akinse'>
    <img src='https://images.mubicdn.net/images/artworks/633681/cache-633681-1695030652/images-original.png?size=420x'></img>
   
    </div>
    <p>Ambulante, el festival de cine documental más grande de México, fue fundado por Gael García Bernal, Diego Luna y Elena Fortes para promover la acción colectiva a través del cine de no ficción. Aquí se destacan selecciones de la edición 2023 de este festival itinerante y orgullosamente comprometido.</p>

  </div>
  <div className='d-flex   justy-content-end align-items-end carnuev carruselafatiha'>
  <CarrouselTwoImages controls={false} one={fatihank} two={fatihanktwo}  ></CarrouselTwoImages>
  </div>
  
  </>}
urlimage="https://images.mubicdn.net/images/film_group/1534/cache-905392-1695718914/image-original.jpg?size=1280x"></ImageBase>
<Separator></Separator>
<Sectioneigth></Sectioneigth>
<Separator></Separator>
<ImageBase
componets={
  <>
  <div className='carnuev d-flex flex-column m-4 gap-2 movemubi '>

    <div className='akinse addmo'>
    <h2  className="text-start ezl1qgr6 css-1ym9gvv e7yvke70" style={{color:"#ffffff"}} >LAS CHICAS BUENAS SE VUELVEN MALAS: </h2>
   <h2 className="text-start  ezl1qgr6 css-1iepvxj e7yvke70"style={{color:"#e55790"}} >PELÍCULAS DE INTERNADOS</h2>
   
    </div>
    <p>Con sus pétreos rituales de vigilancia y disciplina, las películas de internados (muchas dirigidas por mujeres) sueñan con espacios únicos y complejos de dominio femenino donde la austeridad cruel baila de la mano con el erotismo. Las chicas buenas que se vuelven malas siembran el caos como nadie.</p>

  </div>
  <div className='d-flex   justy-content-end align-items-end carnuev carruselinternad'>
  <ListMovies  arraylistofmovies={malast}></ListMovies>
  </div>
  
  </>
} urlimage="https://images.mubicdn.net/images/film_group/1517/cache-906345-1695227275/image-original.jpg?size=1280x"></ImageBase>
<Separator></Separator>
<ImageBase
componets={
  <>
  <div className='carnuev movemubi gap-2 d-flex flex-column m-4'>
    <h2>DESTACADOS DE <br></br> MUBI</h2>
    <p className='selection text-start'>Una muestra compuesta por las películas nuevas y las restauraciones más inspiradoras y cautivantes, recién salidas de cines y festivales. Un intenso mundo de descubrimientos te espera, exclusivamente en MUBI.</p>
  </div>
<div className='d-flex   justy-content-end align-items-end carnuev carruselaftesundestaca'>
<CarrosuelOfCards controls={false} one={one} two={two} three={three}
 four={four} five={five} six={six} seven={seven} eigth={eight} ></CarrosuelOfCards>
</div></>} 
urlimage="https://images.mubicdn.net/images/film_group/1191/cache-807379-1683199695/image-original.png?size=1280x"></ImageBase>
<Separator></Separator>
<ListMovies titlesection={<p>FOCO EN FESTIVALES: VENECIA</p>} arraylistofmovies={bafici}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>FOCO EN FESTIVALES:<br></br> BAFICI</p>} arraylistofmovies={one}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>DEBUTS <span style={{visibility:"hidden"}}>ddjdjdjdjdjdjd</span> </p>} arraylistofmovies={two}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>ADAPTACIONES <span style={{visibility:"hidden"}}>ddjdjdjdjdjdjd</span> </p>} arraylistofmovies={three}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>REENCUADRE MUJERES DIRECTORAS</p>}  arraylistofmovies={four}></ListMovies>
            <Separator></Separator>
            <ListMovies  titlesection={<p>FOCO EN FESTIVALES ROTTERDAM</p>} arraylistofmovies={five}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p> CON ANIMO DE AMAR </p>} arraylistofmovies={six}></ListMovies>
            <Separator></Separator>
               <Carrosuel tittlemovie1="BELLA DE DÍA" direct1="Luis Buñuel"
            daterelate1="Francia, 1967" 
            sinopsisMovie1="En esta comedia negra de Alex Ross Perry, Jason Schwartzman, Elisabeth Moss y Jonathan Pryce protagonizan una historia que toma giros ricos y sorprendentes. Un comentario sobre la repugnante y narcisista figura del escritor repleto de un humor brutalmente ácido que esconde reflexiones más profundas."
            tittlemovie2="THE FALLING"
            direct2="Carol Morley"
            daterelate2="Reino Unido, 2014"
            sinopsisMovie2="Carol Morley se convirtió en una de las directoras británicas más famosas con este film protagonizado por Maisie Williams, Maxine Peake y Florence Pugh debutando como actriz. Un caso de histeria colectiva en un colegio femenino en los 60 sirve de inmersión escalofriante en la psique femenina."

            tittlemovie3="AMNESIA"
            direct3="Christopher Nolan"
            daterelate3="Estados Unidos, 2000"
            sinopsisMovie3="Frena tu caballo, compa! Leíste bien, esta profundidad es obra del único e inigualable David Lynch, con una actuación torpe y encantadora de Harry Dean Stanton: una comedia miniatura que mezcla el espíritu estadounidense con el garbo francés en un espectáculo digno de la Estatua de la Libertad. "
            tittlemovie4="LUCES DE LA CIUDAD"
            direct4="Charlie Chaplin"
            daterelate4="Estados Unidos, 1931"
            sinopsisMovie4="Chaplin en su cúspide implica comedia. Pero este reconocido clásico es también una muestra de lo conmovedor que puede ser al combinar humor con ternura, "
           urlfour="https://images.mubicdn.net/images/film/894/cache-8442-1619187853/image-w1280.jpg?size=1280x" 
           urlthree="https://images.mubicdn.net/images/film/142/cache-32631-1544094102/image-w1280.jpg?size=1280x" 
           twoo="https://images.mubicdn.net/images/film/116728/cache-123293-1692281585/image-w1280.jpg?size=1280x"
            urlone="https://images.mubicdn.net/images/film/2076/cache-9228-1659354735/image-w1280.jpg?size=1280x" ></Carrosuel> 
           
            <Separator></Separator>
            <ListMovies titlesection={<p>FOCO EN FESTIVALES: VENECIA</p>} arraylistofmovies={one}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>FOCO EN FESTIVALES:<br></br> BAFICI</p>} arraylistofmovies={two}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>DEBUTS <span style={{visibility:"hidden"}}>ddjdjdjdjdjdjd</span> </p>} arraylistofmovies={three}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>ADAPTACIONES <span style={{visibility:"hidden"}}>ddjdjdjdjdjdjd</span> </p>} arraylistofmovies={four}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>REENCUADRE MUJERES DIRECTORAS</p>}  arraylistofmovies={five}></ListMovies>
            <Separator></Separator>
            <ListMovies  titlesection={<p>FOCO EN FESTIVALES ROTTERDAM</p>} arraylistofmovies={six}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p> CON ANIMO DE AMAR </p>} arraylistofmovies={seven}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p> MIRA SI TE ATREVES :HORROR DE HALLOWEEN</p>} arraylistofmovies={eight}></ListMovies>
          
            <Separator></Separator>
            <ListMovies titlesection={<p> PELICULAS CON DENOMINACION DE ORIGEN</p>} arraylistofmovies={fatihank}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  OBRAS MAESTRAS DE LOS AÑOS 90</p>} arraylistofmovies={fatihanktwo}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  ACOGER LA INFAMIA: PELÍCULAS DE CULTO</p>} arraylistofmovies={one}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  EL DOLOR DE HACERSE MAYOR: PELÍCULAS COMING-OF-AGE</p>}  arraylistofmovies={two}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  FOCO EN FESTIVALES: BERLINALE</p>} arraylistofmovies={three}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  ORGULLO SIN PREJUICIOS: CINE LGBTQ+</p>}  arraylistofmovies={four}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  AMOR. EL CINE DE WONG KAR WAI.</p>} arraylistofmovies={five}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  CORTOS</p>} arraylistofmovies={six}></ListMovies>
            <Separator></Separator>
           
            <ListMovies titlesection={<p>  PARA TODA LA FAMILIA</p>} arraylistofmovies={seven}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  LA TEORÍA DEL CAOS: RETROSPECTIVA DE SEBASTIÁN SILVA</p>} arraylistofmovies={eight}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  CADUCAN PRONTO</p>} arraylistofmovies={fatihanktwo}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  MUBI ENCUENTROS</p>} arraylistofmovies={fatihanktwo}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p>  DE NIRO A LOS 80: DESTACADO</p>} arraylistofmovies={one}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p> NUEVOS AUTORES</p>} arraylistofmovies={two}></ListMovies>
            <Separator></Separator>
            <ListMovies  titlesection={<p>  PADRE MÍO: LA PATERNIDAD EN EL CINE</p>} arraylistofmovies={three}></ListMovies>
            <Separator></Separator>
            <ListMovies titlesection={<p> CINE MEXICANO</p>} arraylistofmovies={four}></ListMovies>
            <Separator></Separator>
          <Apiselect elemtsofapi={externapia.results}></Apiselect>
            
    </main>
  )
}
export default Home;