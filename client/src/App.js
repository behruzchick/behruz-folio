import { Box } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { supabase } from './CreatCLient';
import { useEffect, useState } from 'react';
function App() {
  const [user,setUser] = useState([]); 
  const users = async() => {
    const data = await supabase
    .from('users')
    .select('*')

    setUser(data);
  }
  useEffect(() => {
    users();
  } , [])
  console.log(user);
  return (
    <Box>
        <Home />
    </Box>
  );
}

export default App;
