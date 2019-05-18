import { AppTranslations } from "./app-translations";

const en: AppTranslations = {
    global: {
        user: {
            anonymousLabel: 'anonymous'
        },
        enums: {
            distance: {
                here: 'here',
                very_close: 'very close',
                close: 'close',
                far: 'far',
                very_far: 'very far'
            },
            gender: {
                gender: 'Gender',
                male: 'Male',
                female: 'Female',
                other: 'Other'
            }
        }
    },
    screens: {
        appLoading: {
            greeting: 'See what people are talking about in {{location}}!',
            locationNotAuthorized: {
                message: 'You need to allow access to your location information to use Habla.',
                buttons: {
                    openSettings: 'Open settings'
                }
            }
        },
        login: {
            inputs: {
                email: {
                    placeholder: 'Email'
                },
                password: {
                    placeholder: 'Password'
                }
            },
            buttons: {
                signInWithFacebook: 'Sign in with Facebook',
                signInWithCredentials: 'Sign in'
            }
        },
        profileCreation: {
            title: 'Profile',
            subtitle: "You're almost ready to start using Habla! Let's create your public profile.",
            subtitleWithName: "You're almost ready to start using Habla, {{name}}! Let's create your public profile.",
            labels: {
                name: 'Name',
                username: 'Username',
                bio: 'Bio',
                website: 'Website',
                phone: 'Phone',
            },
            buttons: {
                next: 'Next'
            }
        },
        timeline: {
            title: 'Timeline',
            errors: {
                fetchingPosts: {
                    unexpected: 'An unexpected error ocurred while loading the posts.',
                    connection: 'There was a problem loading the posts. Please check your connection.'
                }
            }
        },
        channels: {
            title: 'Channels',
            searchPlaceholder: 'Type here...'
        },
        newPost: {
            inputPlaceholder: "What's up?",
            buttons: {
                submit: 'Send'
            },
            errors: {
                insufficentScore: 'Insufficient score to make anonymous posts.'
            },
            anonymous: 'Anonymous'
        },
        notifications: {
            title: 'Notifications',
            notificationTypes: {
                commentOnOwnedPost: '{{username}} commented on your post',
                voteOnOwnedPost: '{{voteCount}} people voted on your post',
                commentOnThirdPartyPost: "{{sender.username} commented on {postOwner.username}'s post"
            }
        },
        post: {
            title: 'Post',
            comments: {
                newCommentInputPlaceholder: 'Type a comment...',
                buttons: {
                    submit: 'Send'
                }
            }
        },
        profile: {
            title: 'Profile',
            changePhoto: {
                title: 'Change photo',
                option1: 'Camera',
                option2: 'Gallery',
                cancel: 'Cancel'
            },
            buttons: {
                signOut: 'Sign out',
                editProfile: 'Edit profile'
            },
            labels: {
                score: 'Score',
                scoreBalance: 'Score balance'
            }
        },
        profileEdition: {
            title: 'Edit profile',
            labels: {
                name: 'Name',
                username: 'Username',
                bio: 'Bio',
                website: 'Website',
                phone: 'Phone',
                home: 'Home',
                undefined: 'Undefined'
            },
            buttons: {
                save: 'Save',
                cancel: 'Cancel',
                define: 'Define'
            },
            alert: {
                title: 'Define current location as your home?',
                message: "You will be able to see the posts from the region you defined as home even if you're not there."
            }
        }
    }
};

export default en;