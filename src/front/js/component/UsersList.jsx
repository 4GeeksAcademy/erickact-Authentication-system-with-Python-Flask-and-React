import React, {useContext, useEffect} from 'react'
import { Context } from '../store/appContext.js'

function UsersList() {
  const {store, actions} = useContext(Context)

  useEffect(() => {
    const getUserList = async () => {
      await actions.getList()
    };
    getUserList()
  }, [])

  return (
      <div className='rounded-3 bg-white text-black p-5'style={{width:"500px"}}>
        <h3 className='mb-3 text-center fw-bold'>Users list</h3>
        <ol>
        {
              store.userList.map((user) => {
              return (
              <li key={user.id} className='fst-italic'>{user.first_name} {user.last_name}</li>
                )
              })
    
          }
          </ol>
      </div>
    )
}

export default UsersList