export interface Place {
  fsq_place_id: string;
  name: string;
  latitude: number;
  longitude: number;
  distance: number;
  categories: Category[];
  chains: Chain[];
  location: Location;

  description?: string;
  link?: string;
  website?: string;
  tel?: string;
  email?: string;
  price?: number;
  rating?: number;
  popularity?: number;

  hours?: Hours;
  hours_popular?: HourRange[];
  date_created: string;
  date_refreshed: string;
  date_closed?: string;

  photos: Photo[];
  tips: Tip[];
  social_media?: SocialMedia;
  stats?: Stats;

  attributes?: PlaceAttributes;

  related_places?: RelatedPlaces;

  place_actions?: PlaceAction[];
  veracity_rating?: Record<string, any>;
}

interface Category {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: Icon;
}

interface Icon {
  prefix: string;
  suffix: string;
  width?: number;
  height?: number;
}

interface Location {
  address?: string;
  formatted_address: string;
  locality: string;
  region: string;
  postcode?: string;
  country: string;
  cross_street?: string;
  admin_region?: string;
}

export interface Hours {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: HourRange[];
}

interface HourRange {
  day: number;
  open: string;
  close: string;
  is_overnight?: boolean;
}

interface Photo {
  fsq_photo_id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications?: string[];
}

interface Tip {
  fsq_tip_id: string;
  created_at: string;
  text: string;
  url?: string;
  lang?: string;
  agree_count: number;
  disagree_count: number;
}

interface PlaceAttributes {
  restroom?: boolean;
  outdoor_seating?: boolean;
  atm?: boolean;
  has_parking?: boolean;
  wifi?: string;
  delivery?: boolean;
  reservations?: boolean;
  takes_credit_card?: boolean;
}

interface Stats {
  total_photos: number;
  total_ratings: number;
  total_tips: number;
}

interface SocialMedia {
  facebook_id?: string;
  instagram?: string;
  twitter?: string;
}

interface RelatedPlaces {
  parent?: Partial<Place>;
  children?: Partial<Place>[];
}

interface Chain {
  fsq_chain_id: string;
  name: string;
  logo?: Icon;
}

interface PlaceAction {
  action: string;
  url: string;
}

export interface FoursquareSearchResponse {
  results: Place[];
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: number;
          longitude: number;
        };
        radius: number;
      };
    };
  };
}
