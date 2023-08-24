import Toast from 'react-native-toast-message';

export interface ToastProps {
    type: "success" | "error" | "info"
    text: string;
}

export function useToast() {
    const showToast = ({ type, text }: ToastProps) => {
        Toast.show({
            type,
            text1: text,
        });
    }

    function sucess(text: string) {
        showToast({ type: 'success', text });
    }

    function error(text: string) {
        showToast({ type: 'error', text });
    }

    function info(text: string) {
        showToast({ type: 'info', text });
    }

    return { sucess, error, info }
}