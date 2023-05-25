import { Layout, Row, Menu } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router/routes";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {

    const navigate = useNavigate()
    const { isAuth, user } = useAppSelector(state => state.auth)
    const { logout } = useActions()

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={1} onClick={logout}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    )
}

export default Navbar