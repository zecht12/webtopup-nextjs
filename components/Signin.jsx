import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/logo.png'

export default function Signin() {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
        <div>
            <Image
                className="mx-auto h-12 w-auto"
                src={Logo}
                alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link href="/Signuppage" className="font-medium text-blue-600 hover:text-blue-600">
                    Sign up
                </Link>
            </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Email address"
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Password"
                />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                </label>
            </div>

            <div className="text-sm">
                <Link href="#" className="font-medium text-blue-600 hover:text-blue-600">
                    Forgot your password?
                </Link>
            </div>
            </div>

            <div>
                <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign in
                </button>
            </div>
            </form>
        </div>
    </div>
    </>
  )
}
