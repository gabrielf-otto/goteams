import axios from 'axios';
import store from '../store';


const api = axios.create({
   baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(config => 
{
   const { token } = store.getState().auth;
   const currentTeam = store.getState().teams.current;
   const headers = { ...config.headers };

   if (token) {
      headers.Authorization = `Bearer ${token}`;
   }

   if (currentTeam) {
      headers.TEAM = currentTeam.slug;
   }

   return { ...config, headers };
});


export default api;
