import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../lib/primsa"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, status } = req.body
  console.log(id, status)
  try {
    const book = await prisma.book.update({
      where: {
        id: id
      },
      data: {
        status: status
      }
    })

    res.status(200).json({ message: "Book Updated", book })
  } catch (error) {
    console.log(error)
  }
}

export default handler
