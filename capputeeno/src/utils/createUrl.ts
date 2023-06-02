export const createUrl = (
  pathname: string,
  params: { page?: number; sort?: string | null; q?: string | null }
) => {
  const searchParams = new URLSearchParams({
    ...(params.page && { page: params.page.toString() }),
    ...(params.sort && { sort: params.sort }),
    ...(params.q && { q: params.q })
  })
  const searchParamsString = searchParams.toString()

  const queryString = `${
    searchParamsString.length ? '?' : ''
  }${searchParamsString}`

  return `${pathname}${queryString}`
}
