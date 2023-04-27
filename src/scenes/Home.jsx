import { useEffect } from "react"

export default function Home ({shows, setShows}) {
  useEffect(() => {
    fetch('https://tv-shows-api-sk.web.app/shows')
      .then(resp => resp.json())
      .then(setShows)
      .catch(alert)
  }, [])

  return (
    <div className="main-container">
      {
        !shows
          ? "Loading..."
          : shows.map(
            (show) => (
              <div key={show.id} className="show-container button-effect">
                <img src={show.poster} alt="" />
                <h2>{show.title}</h2>
                <p>Seasons: {show.seasons}</p>
              </div>
            )
          )
      }
    </div>
  )
}