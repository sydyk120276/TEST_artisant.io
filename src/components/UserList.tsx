import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector';

import { useActions } from '../hooks/useActions';
import Card from './Card'
import '../assets/styles/style.scss'

const UserList: React.FC = () => {
  const { products, error, loading } = useTypedSelector((s) => s.user);
  console.log(products)
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
    <h1 className="">Explore</h1>
    <h3>Buy and sell digital fashion NFT art</h3>
    <div className="home"> 
      {products.map((product) => {
        return <Card key={product.product_id} prod={product} />
  })}
    </div>
    </div>
  );
}

export default UserList
