import React from "react"
import { RecoilRoot } from "recoil"
import { RouteObject, useRoutes } from "react-router-dom"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import { FrontendLayout, SearchLayout } from "./components/layouts/Layouts";
import Homepage from "./pages/homepage/Homepage";
import "./server/server"

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
      path: "/search/:query",
      element: <SearchLayout />,
      children: [
        { index: true, element: <Homepage /> },
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