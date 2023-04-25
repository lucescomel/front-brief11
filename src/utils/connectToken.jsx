export function connectToken () {
    const token = localStorage.getItem('token');

    // console.log(token, 'ouioui');
  
    const config =  {
      headers: { Authorization: `Bearer ${token}`},
  };

  return config;
}