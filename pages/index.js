import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>RCE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <a href="/api/auth/login">Login</a><br /> <br />
      <input type="file" name="file" id="file" />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
