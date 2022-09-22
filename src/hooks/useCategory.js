import { useState } from 'react';
import { getCategoriesApi, addCategoryApi, updateCategoryApi } from '../api/category';
import { useAuth } from './';

export function useCategory() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);
  const { auth } = useAuth();

const getCategories = async () => {
    try {
        setLoading(true);
        const response = await getCategoriesApi();
        setLoading(false);
        setCategories(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
}

const updateCategory = async (id, data) => {}

const addCategory = async (data) =>{
  try {
    setLoading(true)
    await addCategoryApi(data, auth.token);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    setError(error);
  }
}

function newSchema() {
  return {
      title: Yup.string().required(true),
      image: Yup.string().required(true),
  }
}

return {
    loading,
    error,
    categories,
    getCategories,
    addCategory,
}

}