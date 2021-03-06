import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.githubId || '',
      clientSecret: process.env.githubSecret ||''
    }),
    Providers.Google({
      clientId: process.env.googleId || '',
      clientSecret: process.env.googleSecret || '',
    })
  ],
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
