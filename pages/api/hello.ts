// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  user: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await getUsers()
  console.log(response)
  res.status(200).json({user:response})
}

const getUsers = async () => {
  lineNotion()
  const result = await fetch('https://jsonplaceholder.typicode.com/users/1')
  return result
}

const lineNotion = () => {
  const token = 'bvumonmgJ4JSloYQ89tSJIcAJPWtg9qMjo3n1LeqTjZ'
  const text = "Hello world"
  console.log('line-notify')
  axios(
    {
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: text,
    }
  )
  .then( function(res) {
    console.log(res.data);
  })
  .catch( function(err) {
    console.error(err);
  });
}
