import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { NextPractices } from "../NextPractices";
import { NavBar } from "../NavBar - 1";

// USE OTHER SIMPLE NAVBAR

export function ProfileDashboard(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

      <NavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome {props}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          {/* <NextPractices/> */}
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}
