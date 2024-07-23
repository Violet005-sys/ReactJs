import React, { useEffect, useState } from "react";
import axios from 'axios';


  
  export  const getUsers = () => axios.get(`https://jsonplaceholder.typicode.com/users`)

 

