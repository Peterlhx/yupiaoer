import * as movies from '../../mock/movies'

/**
 * 创建临时数据
 */
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

// 根据不同环境取数据
if (process.env.NODE_ENV == 'production') {
	
	// 生产环境数据

} else {
  var showMovies = () => setpromise(movies);
}

export {
	showMovies
}