import { useSession, signIn, signOut } from 'next-auth/client'

export default function myComponent() {
  const [ session, loading ] = useSession()

  return (
    <p>
      {!session && <>
        ログインしてないよ <br/>
        <button onClick={() => signIn('github')}>Sign in</button>
      </>}
      {session && <>
        <img width='300' src={session.user.image || ''} />
        <span>
          {session.user.name}
        </span>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </p>
  )
}
