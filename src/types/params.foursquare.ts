export interface GetPlacesParams {
  ll?: string;
  query?: string;
  radius?: number;
  fsq_category_ids?: string;
  fsq_chain_ids?: string;
  exclude_fsq_chain_ids?: string;
  exclude_all_chains?: boolean;
  fields?: string;
  min_price?: 1 | 2 | 3 | 4;
  max_price?: 1 | 2 | 3 | 4;
  open_at?: string;
  open_now?: boolean;
  tel_format?: "NATIONAL" | "E164";
  sort?: "RELEVANCE" | "RATING" | "DISTANCE" | "POPULARITY";
  limit?: number;
  near?: string;
  ne?: string;
  sw?: string;
}
