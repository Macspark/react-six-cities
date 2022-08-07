export type OfferHost = {
  'avatarUrl': string,
  'id': number,
  'isPro': boolean,
  'name': string,
};

export type OfferLocation = {
  'latitude': number,
  'longitude': number,
  'zoom': number,
};

export type OfferCity = {
  'location': OfferLocation,
  'name': string,
};

export type Offer = {
  'id': number,
  'images': string[],
  'isPremium': boolean,
  'previewImage': string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string,
  'bedrooms': number,
  'city': OfferCity,
  'description': string,
  'goods': string[],
  'host': OfferHost,
  'isFavorite': boolean,
  'location': OfferLocation,
  'maxAdults': number,
};

export type FavoritePostData = {
  'offerId': string,
  'isFavorite': number,
}
