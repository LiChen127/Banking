"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  return (
    <section className="auth-form">
      {/* <h1>{type}</h1> */}
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-1"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 font-semibold lg:text-36 text-gray-900">
            {
              user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"
            }
            <p className="text-16 font-normal text-gray-600">
              {
                user ? 'Link your account to continue' : type === "sign-in" ? 'Sign in to your account' : 'Sign up to create an account'
              }
            </p>
          </h1>
        </div>
      </header>

      {
        user ? (
          <div className="flex flex-col gap-4">
            {/* plant form */}
          </div>
        ) : (
            <>
              FORM
            </>
        )
      }
    </section>
  )
}

export default AuthForm