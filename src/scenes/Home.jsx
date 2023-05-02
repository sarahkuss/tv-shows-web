import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home ({shows, setShows}) {
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://tv-shows-api-sk.web.app/shows')
      .then(resp => resp.json())
      .then(setShows)
      .catch(alert)
  }, [])

  const handleDelete = (showId) =>{
    fetch(`https://tv-shows-api-sk.web.app/shows/${showId}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
       .then(resp => resp.json())
       .then(setShows)
       .catch(alert)
    console.log(showId)
    }

  return (
    <>
    <div className="add-container">
      <button onClick={() => navigate("/addshow")}>Add Show</button>
    </div>
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
                <button onClick={() => handleDelete(show.id)}>Delete</button>
              </div>
            )
          )
      }
    </div>
    </>
  )
}