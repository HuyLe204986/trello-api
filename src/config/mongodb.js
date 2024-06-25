import { env } from '~/config/environment'

import { MongoClient, ServerApiVersion } from 'mongodb'

// Khởi tạo đối tượng trelloDatabaseInstance ban đầu là null(vì chưa connect)
let trelloDatabaseInstance = null

// Khởi tạo đối tượng mongoClientInstance để connect đến MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  // chỉ định 1 cái Stable API Version của MongoDB
  // https://www.mongodb.com/docs/drivers/node/current/fundamentals/stable-api/
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// kết nối tới DB
export const CONNECT_DB = async () => {
  // kết nối tới MongoDB Atlas với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect()

  // kết nối thành công thì lấy ra DB theo tên và gán ngược lại vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// export trelloDatabaseInstance sau khi kết nối thành công tới mongo để sử dụng ở nhiều nơi khác trong code
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}

// đóng kết nối tới DB khi cần
export const CLOSE_DB = async () => {
  // console.log('chay vao close')
  await mongoClientInstance.close()
}
