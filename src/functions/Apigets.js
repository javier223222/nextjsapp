import axios from "axios"
const getmubi=async()=>{
  const res=await axios.get("http://localhost:3000/api/novedadesmubi")
  return res
}

export const getBafici=async()=>{
    const res=await getmubi()
    return res.data.BAFICI
  }

  export const novedaone=async()=>{
    const res=await getmubi()
    return res.data.novedadesone
  }
  export const novedatwo=async()=>{
    const res=await getmubi()
    return res.data.novedadestwo
  }
  export const novedathree=async()=>{
    const res=await getmubi()
    return res.data.novedadesthree
  }
  export const novedafour=async()=>{
    const res=await getmubi()
    return res.data.novedadesfour
  }

  export const novedadesfive=async()=>{
    const res=await getmubi()
    return res.data.novedadesfive
  }
  export const novedadessix=async()=>{
    const res=await getmubi()
    return res.data.novedadessix
  }
  export const novedadeseven=async()=>{
    const res=await getmubi()
    return res.data. novedadesseven
  }
  export const novedadeigth=async()=>{
    const res=await getmubi()
    return res.data.novedadeseigth
  }
  export const  fatinkan=async()=>{
    const res=await getmubi()
    return res.data.FATIHAKIN
  }
  export const  Fatihantwo=async()=>{
    const res=await getmubi()
    return res.data.FATIHAKINTWO
  }
  export const  malas=async()=>{
    const res=await getmubi()
    return res.data.MALAS
  }
  export const externapi=async()=>{
    const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1")
    return res.data
  }