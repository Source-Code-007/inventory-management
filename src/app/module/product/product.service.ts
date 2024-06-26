import { TProduct } from './product.interface'
import ProductModel from './product.model'

const insertProductToDb = async (product: TProduct) => {
  // Using static method
  // const result = await Student.create(student)

  // Using instance method
  // console.log(product, 'product from server')
  const result = new ProductModel(product)
  await result.save()

  return result
}

const getAllProducts = async (searchTerm: string) => {
  let find = {}
  
  if(searchTerm!=undefined && searchTerm != ''){
    find = {
      $or: [
        { name: { $regex: new RegExp(searchTerm, "i") } },
        { category: { $regex: new RegExp(searchTerm, "i") } },
        { description: { $regex: new RegExp(searchTerm, "i") } },
        // { description: { $regex: searchTerm, $options: 'i' } },
      ],
    }
  }

  const result = await ProductModel.find(find)
  return result
}
const getProductById = async (productId: string) => {
  const result = await ProductModel.findById(productId).select({ __v: 0 })
  return result
}
const updateProductById = async (
  productId: string,
  product: Partial<TProduct>,
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, product, {
    new: true,
  }).select({ __v: 0 })
  return result
}
const deleteProductById = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId).select({
    __v: 0,
  })
  return result
}
const deleteAllProducts = async () => {
  const result = await ProductModel.deleteMany({})
  return result
}

export {
  getAllProducts,
  insertProductToDb,
  getProductById,
  updateProductById,
  deleteProductById,
  deleteAllProducts,
}
