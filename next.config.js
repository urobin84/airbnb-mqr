/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'a0.muscache.com'],
  },
  domains: ['www.jsonkeeper.com', 'static.trip101.com', 'links.papareact.com', 'www.mapbox.com'],
  env: {
    mapbox_key: 'pk.eyJ1IjoidXJvYmluODQiLCJhIjoiY2xia3Z0NmxlMDFwMDN4bjF1d2FzeWQybSJ9.kQJP285duMtpj4RHhVERDg'
  }
}
