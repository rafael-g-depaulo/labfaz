export const jwt = {
  secret: process.env.JWT_SECRET ?? '8020f723j2d69c02f03b7aeb8f2',
  expiresIn: '1d'
}

export const token = {
  secret: process.env.JWT_SECRET ?? '8020f723j2d69c02f03b7aeb8f2',
  expiresIn: '600s'
}

export default { jwt, token }
