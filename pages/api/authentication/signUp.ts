// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 return res.status(200).json({ name: 'John Doe' })
// return fetch('http://localhost:4000/login')
// .then(r => r.json())
// .then(data => {
//     let result = JSON.stringify(data.result)
//     return res.status(200).json(result)
// })
}
