export interface registerRequestDTO {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface updateRequestDTO {
    name?: string
    email?: string
}

export interface registerResponseDTO {
    success?: boolean
    message?: string
    id: string
    email: string
}

export interface loginRequestDTO {
    email: string
    password: string
}

export interface loginResponseDTO {
    success?: boolean
    message?: string
    name: string
    email: string
}

export interface logoutResponseDTO {
    success?: boolean
    message?: string
}