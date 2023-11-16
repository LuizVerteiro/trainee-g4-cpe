import { jwtDecode } from 'jwt-decode'
import {create } from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

export const useAuthStore = create(
    persist(
        (set) =>({
            token:null,
            usuario: null,
            setToken: (token) => {
                const {usuario} = jwtDecode(token)

                set({token, usuario})
            },
            setUsuario: (usuario) => {},
        }),
        {
            name: "auth"
        }
    )
)