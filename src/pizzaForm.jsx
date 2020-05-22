import React, {useState, useEffect} from 'react'
import FormSchema from './validation/formSchema';
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues ={
    name:'',
    size:'',
    toppings: {
      chicken: false,
      ham: false,
      pineapple: false,
      onions: false,
    }
  }
  
  const initialFormErrors ={
    name:'',
    size:'',
  }

  export default function pizzaMaker (props) {
      const [formValues, setFormValues] = useState(initialFormValues)
      const [formErrors, setFormErrors] = useState(initialFormErrors)

  }


