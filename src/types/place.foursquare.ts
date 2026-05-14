export interface FoursquarePlace {
  fsq_place_id: string;
  name: string;
  latitude: number;
  longitude: number;
  distance: number;
  categories: FoursquareCategory[];
  chains: FoursquareChain[];
  location: Location;

  description?: string;
  link?: string;
  website?: string;
  tel?: string;
  email?: string;
  price?: number;
  rating?: number;
  popularity?: number;

  hours?: FoursquareHours;
  hours_popular?: FoursquareHourRange[];
  date_created: string;
  date_refreshed: string;
  date_closed?: string;

  photos: FoursquarePhoto[];
  tips: FoursquareTip[];
  social_media?: FoursquareSocialMedia;
  stats?: FoursquareStats;

  attributes?: FoursquarePlaceAttributes;

  related_places?: FoursquareRelatedPlaces;

  place_actions?: FoursquarePlaceAction[];
  veracity_rating?: Record<string, any>;
}

interface FoursquareCategory {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: FoursquareIcon;
}

interface FoursquareIcon {
  prefix: string;
  suffix: string;
  width?: number;
  height?: number;
}

interface FoursquareLocation {
  address?: string;
  formatted_address: string;
  locality: string;
  region: string;
  postcode?: string;
  country: string;
  cross_street?: string;
  admin_region?: string;
}

export interface FoursquareHours {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: FoursquareHourRange[];
}

interface FoursquareHourRange {
  day: number;
  open: string;
  close: string;
  is_overnight?: boolean;
}

interface FoursquarePhoto {
  fsq_photo_id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications?: string[];
}

interface FoursquareTip {
  fsq_tip_id: string;
  created_at: string;
  text: string;
  url?: string;
  lang?: string;
  agree_count: number;
  disagree_count: number;
}

interface FoursquarePlaceAttributes {
  restroom?: boolean;
  outdoor_seating?: boolean;
  atm?: boolean;
  has_parking?: boolean;
  wifi?: string;
  delivery?: boolean;
  reservations?: boolean;
  takes_credit_card?: boolean;
}

interface FoursquareStats {
  total_photos: number;
  total_ratings: number;
  total_tips: number;
}

interface FoursquareSocialMedia {
  facebook_id?: string;
  instagram?: string;
  twitter?: string;
}

interface FoursquareRelatedPlaces {
  parent?: Partial<FoursquarePlace>;
  children?: Partial<FoursquarePlace>[];
}

interface FoursquareChain {
  fsq_chain_id: string;
  name: string;
  logo?: FoursquareIcon;
}

interface FoursquarePlaceAction {
  action: string;
  url: string;
}

export interface FoursquareSearchResponse {
  results: FoursquarePlace[];
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
