import express, { Router, Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import userRoutes from './routes/user/UserRoutes'
import './database'
import CustomError from './exceptions/CustomError'

const app = express()

const router = Router()

app.use(express.json())

router.use('/users', userRoutes)

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof CustomError){
        return response.status(error.status).json(error)
    }

    console.log(error.message)
    return response.status(500).json({
        message: 'Internal server error',
        status: 500
    })
})

app.listen(3333, () => {
    console.log('server is running on port 3333')
})