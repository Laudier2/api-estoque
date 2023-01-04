import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { FindCategoryController } from "../controllers/FindCategoryController";
import { controllerProductCategory, FindProductController } from "../controllers/FindProductController";
import { CreateProductCategoryController } from "../controllers/CreateProductCategoryController";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateProductWithExistCategory } from "../controllers/CreateProductWithExistCategory";
import { CreateProductWithExistCategoryPut } from "../controllers/ControllerProductCategoryPut";
import { ControllerCreate } from "../controllers/controllerUser/controllerCreate";
import { ControllerFind } from "../controllers/controllerUser/controllerFind";
import { controllerUpdate } from "../controllers/controllerUser/controllerUpdate";
import { controllerDelete } from "../controllers/controllerUser/controllerDelete";
import { ControllerAuth } from "../controllers/controllerUser/controllerAuth";
import { ControllerLogin } from "../controllers/controllerUser/controllerLogin";

const router = Router();//

/* ============================== OBJETO CRIADOS PARA ROTAS ====================== */
const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();
const createProductCategoryExistPut = new CreateProductWithExistCategoryPut();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();
const findProductCategory = new controllerProductCategory();

/*=================================== ROTA DE PRODUCT =============================*/

router.post("/product", createProduct.handle);
router.get("/product", findProduct.handle);
router.get("/productcategory", findProductCategory.handle);

/*=================================== ROTA DE CATEGORY =============================*/
router.post("/category", createCategory.handle);
router.post("/categoryproduct", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);
router.get("/category", findCategory.handle);

/*=================================== ROTA DE USERS =============================*/

const findUser = new ControllerFind()
const createUser = new ControllerCreate()
const deleteUser = new controllerDelete
const updateUser = new controllerUpdate()
const authUser = new ControllerAuth()
const loginUser = new ControllerLogin()

/* ============================= ROTAS DE ACESSO =============================== */

router.post("/user", createUser.handle);
router.post("/login", loginUser.handle);
router.use(authUser.handle);
router.put("/user", updateUser.handle);
router.delete("/user", deleteUser.handle);
router.get("/user", findUser.handle);

export { router };
