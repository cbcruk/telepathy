export type Category = {
  name: string
  total: number
}

export type Categories = Category[]

export type Props = {
  categories: Categories
  className: string
}
