const paginate = (followers) => {
  const perPage = 12
  const totalPages = Math.ceil(followers.length / perPage)

  const newFollowers = Array.from({ length: totalPages }, (_, i) => {
    const start = i * perPage
    return followers.slice(start, start + perPage)
  })
  return newFollowers
}

export default paginate
