import { Route, Routes } from "react-router-dom";
import PublicPage from "../Pages/Public";
import { lazy, Suspense } from "react";
import BackgroundLayout from "../Layout/BackgroundLayout";
import Loading from "../Components/Loading";
import PrivateLayout from "../Pages/Private";

const CartPage = lazy(() => import("../Pages/CartPage"));
const Home = lazy(() => import("../Pages/Public/Home"));
const Login = lazy(() => import("../Pages/Public/Login"));
const FAQ = lazy(() => import("../Pages/Public/FAQPage"));
const Contact = lazy(() => import("../Pages/Public/ContactPage"));
const Products = lazy(() => import("../Pages/Public/ProductPage"));
const Page404 = lazy(() => import("../Pages/404Page"));
const BrandPage = lazy(() => import("../Pages/Public/BrandPage"));
const Detail = lazy(() => import("../Pages/Detail"));
const SignUp = lazy(() => import("../Pages/Public/SignUp"));
const BlogPage = lazy(() => import("../Pages/Public/BlogPage"));
const BlogDetail = lazy(() => import("../Pages/Public/BlogDetail"));
const HomeAdmin = lazy(() => import("../Pages/Private/HomeAdmin"));
const AdminPage = lazy(() => import("../Pages/Private/CreateAdmin"));
const ManagerPage = lazy(() => import("../Pages/Private/Manager"));
const ReportPage = lazy(() => import("../Pages/Private/Report"));
const BillPage = lazy(() => import("../Pages/BillPage"));
const BillsPage = lazy(() => import("../Pages/BillsPage"));
const DetailUserPage = lazy(() => import("../Pages/DetailUserPage"));

const ConfigRoute = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* Public Route */}
                    <Route element={<PublicPage />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/cart/:userId" element={<CartPage />} />
                        <Route path="/bill/:bid" element={<BillPage />} />
                        <Route path="/bill/list/:uid" element={<BillsPage />} />
                        <Route path="/brand/:brandId" element={<BrandPage />} />
                        <Route
                            path="/products/:productId"
                            element={<Detail />}
                        />

                        <Route path="/blog/:bid" element={<BlogDetail />} />
                        <Route path="/user/:uid" element={<DetailUserPage />} />
                    </Route>
                    {/* Private Route */}
                    <Route element={<PrivateLayout />}>
                        <Route path="/admin" element={<HomeAdmin />} />
                        <Route
                            path="/manager"
                            element={<ManagerPage />}
                        ></Route>
                        <Route path="/create" element={<AdminPage />}></Route>
                        <Route path="/report" element={<ReportPage />} />
                    </Route>
                    <Route element={<BackgroundLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign_up" element={<SignUp />} />
                    </Route>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default ConfigRoute;
