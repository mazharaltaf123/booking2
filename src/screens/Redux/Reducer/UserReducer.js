
  
  import { createSlice } from '@reduxjs/toolkit';
  const initialState = {
    users: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'customer',
      },
      {
        name: 'Dr. Jane Smith',
        email: 'jane.smith@example.com',
        role: 'doctor',
      },
    ],
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
  });
  
  export default userSlice.reducer;