export type RequestParamsType = {
  page?: number
  per_page?: number
  sort_by?: SortParamType
  sort_dir?: SortOrderType
}

export type ResponseType = {
  pagination_info: {
    total: number
    limit_per_page: number
    total_pages: number
    current_page: number
    next_page: number
    prev_page: number
  },
  cats: ItemType[]
}

export type ItemType = {
  id: number
  name: string
  category: string
  price: number
  image_url: string
  available: true,
  created_at: Date
  updated_at: Date
}

export type ContextType = {
  setIsLoading: (isLoading: boolean) => void
  setIsShowOptions: (isShowOptions: boolean) => void
  data: ItemType[]
  setError: (error: ErrorType) => void
}

export type ErrorType = string | null

export type PaginationParamType = {
  currentPage: number
  itemsCount: number
}

export type PaginationOptions = {
  total: number
  limit_per_page: number
  total_pages: number
  current_page: number
  next_page: number
  prev_page: number
}

export enum SortParamType {
  NULL = '',
  ID = 'id',
  NAME = 'name',
  CATEGORY = 'category',
  PRICE = 'price'
}

export enum SortOrderType {
  NULL = '',
  ASC = 'asc',
  DESC = 'desc'
}
