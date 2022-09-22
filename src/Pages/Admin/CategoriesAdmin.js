import React, { useState, useEffect } from 'react'
import {Loader} from "semantic-ui-react"
import { HeaderPage , TableCategoryAdmin, AddEditCategoryForm} from "../../components/Admin"
import { ModalBasic } from "../../components/Commom"
import { useCategory } from "../../hooks"


export  function CategoriesAdmin() {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const { loading, categories, getCategories} = useCategory();
    
    useEffect(() => {
        getCategories()
    }, [refetch]);
    
    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch((prev) => !prev);

    const addCategory = () =>{
        setTitleModal("Nueva Categoria");
        setContentModal(<AddEditCategoryForm onClose={openCloseModal}
        onRefetch={onRefetch} />)
        openCloseModal();
    };

    const updateCategory = (data) => {
        setTitleModal("Actualizar categoria");
        setContentModal(
            <AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} category={data}/>
        )
        openCloseModal();
    };

  return (
    <>
        <HeaderPage title="Categorias" btnTitle="Nueva categoria" btnClick={addCategory} />
        {loading ? (
            <Loader active inline="centered">
                Cargando...
            </Loader>

        ) : (
            <TableCategoryAdmin categories={categories} updateCategory={updateCategory}/>
        )}
        <ModalBasic 
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children={contentModal}

        />
    </>
  )
}
