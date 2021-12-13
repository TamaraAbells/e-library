import React from "react"
import { RecoilRoot } from "recoil"
import { RouteObject, useRoutes } from "react-router-dom"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import { FrontendLayout } from "./components/layouts/Layouts"
import Homepage from "./pages/homepage/Homepage"
import Search from "./pages/search/Search"
import Category from "./pages/category/Category"
import Container from "./pages/reader/Container"
import Reader from "./pages/reader/Reader"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// import "./server/server"

export const App = () => {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <FrontendLayout />,
      children: [
        { index: true, element: <Homepage /> },
      ]
    },
    {
      path: "/search/",
      element: <FrontendLayout />,
      children: [
        { index: true, element: <Search /> },
      ]
    },
    {
      path: "/category/",
      element: <FrontendLayout />,
      children: [
        { index: true, element: <Category /> },
      ]
    },
    {
      path: "/reader/",
      // element: <FrontendLayout />,
      children: [
        { index: true, element: <Container /> },
      ]
    },
    {
      path: "/readerz/",
      element: <FrontendLayout />,
      children: [
        { index: true, element: <Reader /> },
      ]
    },
    {
      path: "/login/",
      // element: <FrontendLayout />,
      children: [
        { index: true, element: <Login /> },
      ]
    },
    {
      path: "/register/",
      // element: <FrontendLayout />,
      children: [
        { index: true, element: <Register /> },
      ]
    },
  ];

  let element = useRoutes(routes);

  return (
    <QueryClientProvider client={new QueryClient()}>
        <RecoilRoot>
          <ChakraProvider theme={theme}>
            {element}
          </ChakraProvider>
        </RecoilRoot>
      </QueryClientProvider>
  )
}