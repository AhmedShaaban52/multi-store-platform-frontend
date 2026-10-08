type User = {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Users</h1>
        <p>Failed to load users (status {res.status})</p>
      </main>
    );
  }

  const users: User[] = await res.json();

  console.log("users", users);

  return (
    <main style={{ padding: 24 }}>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users yet</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}