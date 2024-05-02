import { withAuth } from "next-auth/middleware";

export default withAuth;

// protected rootes
export const config = {
  matcher: ["/chat", "/chat/:id*", "/register"],
};
