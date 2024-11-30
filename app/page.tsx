import Feed from "@/components/FeedComponent/Feed"
import Header from "@/components/Header"
import Sidebar from "@/components/SidebarComponent/Sidebar"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import LoginPage from "./login/page"

export const metadata: Metadata = {
  title: "Facebook",
}

async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) return <LoginPage />

  return (
    <div className="h-screen bg-slate-100 overflow-hidden">
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}

export default Home
