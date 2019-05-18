import { AppTranslations } from "./app-translations";

const pt: AppTranslations = {
    global: {
        user: {
            anonymousLabel: 'anônimo'
        },
        enums: {
            distance: {
                here: 'aqui',
                very_close: 'muito perto',
                close: 'perto',
                far: 'longe',
                very_far: 'muito longe'
            },
            gender: {
                gender: 'Gênero',
                male: 'Masculino',
                female: 'Feminino',
                other: 'Outro'
            }
        }
    },
    screens: {
        appLoading: {
            greeting: 'Saiba o que está em alta em {{location}}!',
            locationNotAuthorized: {
                message: 'Você precisa permitir o acesso à sua localização para usar o Habla.',
                buttons: {
                    openSettings: 'Abrir configurações'
                }
            }
        },
        login: {
            inputs: {
                email: {
                    placeholder: 'Email'
                },
                password: {
                    placeholder: 'Senha'
                }
            },
            buttons: {
                signInWithFacebook: 'Entrar com o Facebook',
                signInWithCredentials: 'Entrar'
            }
        },
        profileCreation: {
            title: 'Perfil',
            subtitle: "Você está quase lá! Vamos criar o seu perfil público.",
            subtitleWithName: "Você está quase lá, {{name}}! Vamos criar o seu perfil público.",
            labels: {
                name: 'Nome',
                username: 'Usuário',
                bio: 'Bio',
                website: 'Website',
                phone: 'Telefone',
            },
            buttons: {
                next: 'Continuar'
            }
        },
        timeline: {
            title: 'Linha do tempo',
            errors: {
                fetchingPosts: {
                    unexpected: 'Um erro inesperado ocorreu ao carregar os posts.',
                    connection: 'Houve um erro de conexão ao carregar os posts. Verifique se está conectado à internet.'
                }
            }
        },
        channels: {
            title: 'Canais',
            searchPlaceholder: 'Digite aqui...'
        },
        newPost: {
            inputPlaceholder: "O que está acontecendo?",
            buttons: {
                submit: 'Enviar'
            },
            errors: {
                insufficentScore: "Pontuação insuficiente para fazer posts anônimos."
            },
            anonymous: "Anônimo"
        },
        notifications: {
            title: 'Notificações',
            notificationTypes: {
                commentOnOwnedPost: '{{username}} comentou na sua publicação',
                voteOnOwnedPost: '{{voteCount}} pessoas votaram na sua publicação',
                commentOnThirdPartyPost: '{{sender.username} comentou no post de {postOwner.username}'
            }
        },
        post: {
            title: 'Publicação',
            comments: {
                newCommentInputPlaceholder: 'Escreva um comentário...',
                buttons: {
                    submit: 'Enviar'
                }
            }
        },
        profile: {
            title: 'Perfil',
            changePhoto: {
                title: 'Editar foto',
                option1: 'Câmera',
                option2: 'Galeria',
                cancel: 'Cancelar'
            },
            buttons: {
                signOut: 'Sair',
                editProfile: 'Editar perfil'
            },
            labels: {
                score: 'Pontos',
                scoreBalance: 'Saldo de pontos'
            }
        },
        profileEdition: {
            title: 'Editar perfil',
            labels: {
                name: 'Nome',
                username: 'Usuário',
                bio: 'Bio',
                website: 'Website',
                phone: 'Telefone',
                home: 'Casa',
                undefined: 'Não definido'
            },
            buttons: {
                save: 'Salvar',
                cancel: 'Cancelar',
                define: 'Definir'
            },
            alert: {
                title: 'Definir a localização atual como sua casa?',
                message: 'Você poderá ver os posts da região definida como casa mesmo quando não estiver nela.'
            }
        }
    }
};

export default pt;