import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { BASE_URL } from "@/services/base";

export const authOptions = {
    pages: {
        signIn: "/?modal=true",
        error: "/",
    },
    callbacks: {
        async redirect(params) {
            if (params.url.startsWith("http") || params.url.startsWith("/")) {
                return params.url;
            } else {
                return params.baseUrl;
            }
        },
        async session({ session, token, user, trigger }) {
            session.user.access_token = token.access_token;
            session.user.token_type = token.token_type;
            return session;
        },
        async jwt({ account, token, user, profile, session, trigger }) {
            if (user) {
                token.access_token = user.access_token;
                token.token_type = user.token_type;
            }
            if (trigger === "update") {
                token.name = session.name;
                token.email = session.email;
                token.picture = session.picture;
                token.id = session.id;
            }
            return token;
        },
        async signIn(data) {
            switch (data.account.provider) {
                case "google": {
                    const req = await fetch(`${BASE_URL}/auth/google`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept-Language": "en-US",
                            "x-app": "_Web",
                        },
                        body: JSON.stringify({
                            id_token: `${data.account.access_token}`,
                        }),
                    });
                    const res = await req.json();
                    // console.log(res, "res");
                    if (req.ok) {
                        data.user.token = res.token;
                        data.user.cellphone = res.user.cellphone;
                        data.user.id = res.user.id;
                        return data;
                    } else {
                        throw new Error("Failed to login");
                    }
                }

                case "facebook": {
                    const req = await fetch(`${URL}/auth/facebook`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept-Language": "en-US",
                            "x-app": "_Web",
                        },
                        body: JSON.stringify({
                            access_token: `${data.account.access_token}`,
                        }),
                    });
                    const res = await req.json();
                    // console.log(res, "res");
                    if (req.ok) {
                        return data;
                    } else {
                        throw new Error("Failed to login");
                    }
                }
                case "loginWithUsername": {
                    return data;
                }
                case "signUpWithOTP": {
                    return data;
                }
                default:
                    return false;
            }
        },
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID ?? "",
            clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            id: "loginWithUsername",
            type: "credentials",
            name: "Login With Username",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // If no error and we have user data, return it
                if (req.query) {
                    // console.log("success");
                    const userInfo = JSON.parse(req.query.user);
                    // console.log(userInfo);
                    // const user = {
                    //   cellphone: reqInfo.user.cellphone,
                    //   code: reqInfo.user.status,
                    //   id: reqInfo.user.id,
                    // };
                    //   const user = {
                    //     id: userInfo.user.id,
                    //     name: `${userInfo.user.first_name || ""} ${
                    //       userInfo.user.last_name || ""
                    //     }`,
                    //     image: userInfo.user.image,
                    //     email: userInfo.user.email,
                    //     cellphone: userInfo.user.cellphone,
                    //     token: userInfo.token,
                    //   };
                    // console.log(user, "user in auth");
                    return userInfo;
                } else {
                    throw new Error(`User Not Found`);
                }
            },
        }),
    ],
    session: {
        maxAge: 60 * 60 * 24 * 365 * 100,
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
