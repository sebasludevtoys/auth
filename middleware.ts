import {  NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const signedinPages = ['/secret']

export function middleware(req: NextRequest) {
  const token = req.cookies.get('TEST_TOKEN')
    if (!token) {
      return NextResponse.redirect(new URL('/signin', req.url))
    }
  // if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
  //   const token = req.cookies

  //   if (!token) {
  //     return NextResponse.redirect('/signin')
  //   }
  // }
}

export const config = {
  matcher: '/secret'
}