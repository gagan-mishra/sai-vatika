export type ConnectivityCategory =
  | 'Airport'
  | 'Railway'
  | 'Education'
  | 'Healthcare'
  | 'Spiritual'
  | 'Business Hub'
  | 'Highway'

export interface ConnectivityPoint {
  category: ConnectivityCategory
  name: string
  distance: string
  description: string
}

export interface Property {
  id: string
  title: string
  tagline: string
  location: string
  city: string
  price: string
  priceValueLakh: number
  category: string
  status: 'Prime Release' | 'Now Selling' | 'Limited Inventory'
  isFlagship?: boolean
  plotSizes: string
  acres: string
  landUse: string
  utilities: string[]
  description: string
  highlights: string[]
  features?: string[]
  benefits?: string[]
  nearbyFacilities?: { name: string; distance: string }[]
  sitePlanImage?: string
  locationMapImage?: string
  connectivity: ConnectivityPoint[]
  mainImage: string
  galleryImages: string[]
  tags: string[]
}
