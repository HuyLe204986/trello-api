import { StatusCodes } from 'http-status-codes'
// import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({
      message: 'API create board from controller',
      code: StatusCodes.OK
    })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}