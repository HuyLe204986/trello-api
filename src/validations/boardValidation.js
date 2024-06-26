import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required',
      'string.empty': 'Title is not allowed to be empty',
      'string.max': 'Title max 50 chars',
      'string.min': 'Title min 3 chars',
      'string.trim': 'Title must not have leading or trailing whitespace'
    }),
    description: Joi.string().required().min(3).max(250).trim().strict(),
  })
  try {
    // set abortEarly: false để chỉ định trường hợp có nhiều lỗi thì trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // next()
    res.status(StatusCodes.CREATED).json({
      message: 'API create board from validation',
      code: StatusCodes.OK
    })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
  
}

export const boardValidation = {
  createNew
}