import { NextApiRequest, NextApiResponse } from 'next'

const sampleUserData = [
  { id: "1", name: "test1" },
  {id: "2", name:"test2"},
]
const url = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656541053&redirect_uri=https://proaca-next.vercel.app/&state=satakeyusuke&scope=profile%20openid"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err:any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler