export type Review = {
  'comment': string,
  'date': string,
  'id': number,
  'rating': number,
  'user': {
    'avatarUrl': string,
    'id': number,
    'isPro': boolean,
    'name': string,
  },
}

export type ReviewPostData = {
  'offerId': string,
  'formData': {
    'comment': string,
    'rating': string,
  },
}
