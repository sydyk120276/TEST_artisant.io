import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector';

import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((s) => s.user);
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.product_id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserList
