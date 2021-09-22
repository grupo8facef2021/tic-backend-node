import 'express-async-errors'
import './database'
import express, { Router, Request, Response, NextFunction } from 'express'
import CustomError from './exceptions/CustomError'
import userRoutes from './routes/UserRoutes'
import employeeRoutes from './routes/EmployeeRoutes'
import authRoutes from './routes/AuthRoutes'

const app = express()

const router = Router()

app.use(express.json())

router.use('/employees', employeeRoutes)
router.use('/users', userRoutes)
router.use('/auth', authRoutes)

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