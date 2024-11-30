"use client"
import { SessionProvider } from "next-auth/react"

function SessionProviderClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SessionProvider refetchInterval={5 * 60}>{children}</SessionProvider>
}

export default SessionProviderClient
