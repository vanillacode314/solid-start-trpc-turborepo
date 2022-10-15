// @refresh reload
import { Component, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import "./root.css";
import Base from "~/layouts/Base";

export const Root: Component = () => {
  return (
    <Html lang="en">
      <Head>
        <Title>Solid Start tRPC turborepo starter template</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Base>
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Base>
      </Body>
    </Html>
  );
};

export default Root;
