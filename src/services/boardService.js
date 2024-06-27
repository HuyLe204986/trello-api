import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // xử lí logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // gọi tới model để xử lí lưu data và DB
    const createdBoard = await boardModel.createNew(newBoard)
    // console.log(createdBoard)

    // Lấy bản ghi board sau khi tạo
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    // console.log(getNewBoard)
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}