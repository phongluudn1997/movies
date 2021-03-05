import * as React from 'react'
import {Nav} from 'modules/common/components/nav'
import {usePopulardMovies} from 'modules/home/api/movies'
import {MovieInfo} from './components/movie-information'
import styles from './styles.module.scss'

function Jumbotron() {
  const [currentImage, setCurrentImage] = React.useState(0)
  const {data: movies, isLoading} = usePopulardMovies()

  const backgroundImage =
    movies &&
    'https://image.tmdb.org/t/p/original/' + movies[currentImage].backdrop_path

  return isLoading ? (
    'Loading...'
  ) : (
    <div className="relative">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className={`${styles['jumbotron-content']} bg-black bg-opacity-75`}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <Nav />
          <div className="flex">
            <div className="flex-1">
              <MovieInfo data={movies[0]} />
            </div>
            <div className="flex flex-1 gap-2 text-white items-end justify-end">
              {Array.from({length: 5}).map((_, i) => {
                const backgroundColor =
                  currentImage === i
                    ? 'bg-orange-500'
                    : 'bg-white bg-opacity-80'
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-1 w-10 ${backgroundColor} focus:outline-none`}
                  ></button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Jumbotron}
