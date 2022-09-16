enum Membership {
  Simple,
  Standard,
  Permium
}

const membership = Membership.Standard // returns 1
const membershipReverse = Membership[2] // returns 2

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social); // return instagram




