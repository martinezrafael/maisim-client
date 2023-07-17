import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { getAccessToken } from '../../../api/api.lw';
import { useParams } from 'react-router-dom';


const User = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams()

  useEffect(()=> {
    
    async function fetchUser(){}
    
  })

  return (
    <div>User</div>
  )
}

export default User