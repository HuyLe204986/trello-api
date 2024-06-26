import { slugify } from '~/utils/formatters'
const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // xử lí logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}