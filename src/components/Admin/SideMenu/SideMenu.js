import React from 'react';
import {Menu, Icon} from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./SideMenu.scss";

export function SideMenu(props) {
    const { children } = props;
    const { pathname } = useLocation();
    console.log(useLocation());

  return (
    <div className="side-menu-admin">
        <MenuLeft pathname={pathname}/>
        <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
    const { pathname } = props;
    const{ auth } = useAuth();
    console.log(auth);

    return (
        <Menu fixed="left" borderless className="side" vertical>
            <Menu.Item className='pedidoscss' as={Link} to={'/admin'} active={pathname === "/admin"}>
                <h3>
                    <Icon name="home"/>Pedidos
                </h3>
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/tables'} active={pathname === "/admin/tables"}>
                <h3>
                    <Icon name="table"/>Mesas
                </h3>
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/payments-history'} active={pathname === "/admin-payments-history"}>
                <h3>
                    <Icon name="history"/>Historial de Pagos
                </h3>
            </Menu.Item>
            
            <Menu.Item as={Link} to={'/admin/categories'} active={pathname === "/admin/categories"}>
                <h3>
                    <Icon name="folder"/>Categorias
                </h3>
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/products'} active={pathname === "/admin/products"}>
                <h3>
                    <Icon name="cart"/>Productos
                </h3>
            </Menu.Item>
            
            {auth.me?.is_staff &&(
                <Menu.Item as={Link} to={'/admin/users'} active={pathname === "/admin/users"}>
                <h3>
                    <Icon name="users"/>Usuarios
                </h3>
            </Menu.Item>
            )}
            
        </Menu>
        
    )
}