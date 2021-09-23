export default {

  jwt: {
    secret: process.env.JWT_SECRET ?? '8020877602e2d69c02c2f0377909b8f2',
    expiresIn: '1d'
  },

  token: {
    secret: process.env.JWT_SECRET ?? '8020877602e2d69c02c2f0377909b8f2',
    expiresIn: '600s'
  }
}
