const BASE_URL = 'https://akshaycomputers.in';

export default function sitemap() {
  return ['', '/services', '/team', '/about', '/contact'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
