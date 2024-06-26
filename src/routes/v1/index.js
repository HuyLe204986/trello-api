import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from './boardRoute'

const Router = express.Router()

/** Check API */
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'API v1 are ready to use',
    code: StatusCodes.OK
  })
})

/** Board APIs */
Router.use('/boards', boardRouter)

export const APIs_V1 = Router
