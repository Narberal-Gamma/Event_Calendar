import { Button, Form, Input } from "antd"
import { FC, useState } from "react"
import { rules } from "../utils/rules"
import { useAppSelector } from "../hooks/redux"
import { useActions } from "../hooks/useActions"


const LoginForm: FC = () => {

    const { isError, isLoading } = useAppSelector(state => state.auth)

    const { login } = useActions()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {isError && <div style={{ color: 'red' }}>{isError}</div>}
            <Form.Item
                label="Имя пользователя"
                name="Username"
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль!')]}
            >
                <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm