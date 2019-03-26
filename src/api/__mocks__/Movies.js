const fakeData = [
  {
    id: 1,
    title: "Test Title",
    poster_path: "/test.jpg",
    release_date: "2019-01-03",
    popularity: 1056,
    vote_average: 8.6
  }
]

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData)
  })
}