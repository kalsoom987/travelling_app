import { FaLocationArrow, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

export const myAccount = [
{
    name: 'My Account',
path: '/account',
},
{
    name: 'Order History',
path: '/order-history',
},
{
    name: 'Wishlist',
path: '/wishlist',
},
{
    name: 'Chat',
path: '/chat',
},
]

export const Information = [
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Delivery Information',
    path: '/delivery-information',
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    name: 'Terms & Conditions',
    path: '/terms-conditions',
  },
]

export const storeInformation = [
  {
    icon: <FaLocationArrow />,
    text: 'Punjab, Pakistan',
  },
  {
    icon: <FaRegEnvelope />,
    text: 'test@test.com',
  },
  {
    icon: <FaPhoneAlt />,
    text: '+92 312 1283912',
  },
]
