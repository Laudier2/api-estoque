import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { FindCategoryController } from "../controllers/FindCategoryController";
import { controllerProductCategory, controllerProductId, FindProductController } from "../controllers/FindProductController";
import { CreateProductCategoryController } from "../controllers/CreateProductCategoryController";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateProductWithExistCategory } from "../controllers/CreateProductWithExistCategory";
import { CreateProductWithExistCategoryPut } from "../controllers/ControllerProductCategoryPut";
import { ControllerAdress2, ControllerCreate } from "../controllers/controllerUser/controllerCreate";
import { ControllerFind } from "../controllers/controllerUser/controllerFind";
import { controllerUpdate } from "../controllers/controllerUser/controllerUpdate";
import { controllerDelete, controllerDeleteRelation } from "../controllers/controllerUser/controllerDelete";
import { ControllerAuth } from "../controllers/controllerUser/controllerAuth";
import { ControllerLogin } from "../controllers/controllerUser/controllerLogin";
import { UserParamesId } from "../controllers/controllerUser/controllerParamesId";

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
const findProductCategoryId = new controllerProductId();

/*=================================== ROTA DE PRODUCT =============================*/

router.post("/product", createProduct.handle);
router.get("/product", findProduct.handle);
router.get("/productcategory", findProductCategory.handle);
router.get("/productcategoryid/:id", findProductCategoryId.handle);

/*=================================== ROTA DE CATEGORY =============================*/
router.post("/category", createCategory.handle);
router.post("/categoryproduct", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);
router.get("/category", findCategory.handle);

/*=================================== ROTA DE USERS =============================*/

const findUser = new ControllerFind()
const findUserId = new UserParamesId()
const createUser = new ControllerCreate()
const createAdress2 = new ControllerAdress2()
const deleteUser = new controllerDelete()
const deleteAdress2 = new controllerDeleteRelation()
const updateUser = new controllerUpdate()
const updateUserAdress2 = new ControllerAdress2()
const authUser = new ControllerAuth()
const loginUser = new ControllerLogin()

/* ============================= ROTAS DE ACESSO =============================== */

router.post("/user", createUser.handle);
router.post("/adress2", createAdress2.handle);
router.post("/login", loginUser.handle);
//router.use(authUser.handle);
router.put("/user", updateUser.handle);
router.put("/useradress2put", updateUserAdress2.handle);
router.delete("/user/:id", deleteUser.handle);
router.delete("/adress2/:id", deleteAdress2.handle);
router.get("/user", findUser.handle);
router.get("/user/:id", findUserId.handle);
export { router };
