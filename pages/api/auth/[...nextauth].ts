import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
  ],
  // Callbacks để xử lý session và JWT (tuỳ chọn)
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id // Thêm id vào session nếu cần
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  // Secret dùng để mã hóa JWT (quan trọng)
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
